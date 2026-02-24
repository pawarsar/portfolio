from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import Optional
from datetime import datetime
import uuid

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    subject: str = Field(..., min_length=5, max_length=200)
    message: str = Field(..., min_length=10, max_length=2000)
    
    @field_validator('name', 'subject', 'message')
    @classmethod
    def strip_whitespace(cls, v):
        if isinstance(v, str):
            return v.strip()
        return v

class ContactResponse(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    createdAt: datetime
    status: str = "pending"
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class ContactInDB(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    createdAt: datetime = Field(default_factory=datetime.utcnow)
    status: str = "pending"
    ipAddress: Optional[str] = None
