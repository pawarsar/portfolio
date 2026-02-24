from fastapi import APIRouter, HTTPException, Request
from typing import List
from datetime import datetime, timedelta
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from models.contact import ContactCreate, ContactResponse, ContactInDB

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/contact", tags=["contact"])

# Get database
from server import db

# Simple in-memory rate limiting (in production, use Redis)
rate_limit_store = {}

def check_rate_limit(ip: str, max_requests: int = 5, window_minutes: int = 60) -> bool:
    """Check if IP has exceeded rate limit"""
    now = datetime.utcnow()
    
    # Clean old entries
    for ip_key in list(rate_limit_store.keys()):
        rate_limit_store[ip_key] = [
            req_time for req_time in rate_limit_store[ip_key]
            if now - req_time < timedelta(minutes=window_minutes)
        ]
        if not rate_limit_store[ip_key]:
            del rate_limit_store[ip_key]
    
    # Check current IP
    if ip not in rate_limit_store:
        rate_limit_store[ip] = []
    
    rate_limit_store[ip] = [
        req_time for req_time in rate_limit_store[ip]
        if now - req_time < timedelta(minutes=window_minutes)
    ]
    
    if len(rate_limit_store[ip]) >= max_requests:
        return False
    
    rate_limit_store[ip].append(now)
    return True

@router.post("", response_model=ContactResponse)
async def create_contact(contact_data: ContactCreate, request: Request):
    """
    Submit a contact form message
    
    - **name**: Your full name (2-100 characters)
    - **email**: Valid email address
    - **subject**: Message subject (5-200 characters)
    - **message**: Your message (10-2000 characters)
    """
    try:
        # Get client IP
        client_ip = request.client.host
        
        # Check rate limit
        if not check_rate_limit(client_ip):
            logger.warning(f"Rate limit exceeded for IP: {client_ip}")
            raise HTTPException(
                status_code=429,
                detail="Too many requests. Please try again later."
            )
        
        # Create contact object
        contact = ContactInDB(
            **contact_data.dict(),
            ipAddress=client_ip
        )
        
        # Insert into database
        result = await db.contacts.insert_one(contact.dict())
        
        if not result.inserted_id:
            raise HTTPException(status_code=500, detail="Failed to save contact message")
        
        logger.info(f"Contact form submitted by {contact.email}")
        
        # Return response
        return ContactResponse(
            id=contact.id,
            name=contact.name,
            email=contact.email,
            subject=contact.subject,
            message=contact.message,
            createdAt=contact.createdAt,
            status=contact.status
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("", response_model=List[ContactResponse])
async def get_all_contacts(limit: int = 100, skip: int = 0):
    """
    Get all contact messages (Admin endpoint)
    
    - **limit**: Maximum number of messages to return (default: 100)
    - **skip**: Number of messages to skip (default: 0)
    """
    try:
        contacts = await db.contacts.find().sort("createdAt", -1).skip(skip).limit(limit).to_list(limit)
        
        return [
            ContactResponse(
                id=contact["id"],
                name=contact["name"],
                email=contact["email"],
                subject=contact["subject"],
                message=contact["message"],
                createdAt=contact["createdAt"],
                status=contact.get("status", "pending")
            )
            for contact in contacts
        ]
    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@router.get("/stats")
async def get_contact_stats():
    """
    Get contact form statistics (Admin endpoint)
    """
    try:
        total = await db.contacts.count_documents({})
        pending = await db.contacts.count_documents({"status": "pending"})
        read = await db.contacts.count_documents({"status": "read"})
        
        return {
            "total": total,
            "pending": pending,
            "read": read
        }
    except Exception as e:
        logger.error(f"Error fetching contact stats: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")
