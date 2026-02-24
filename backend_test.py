#!/usr/bin/env python3
"""
Comprehensive Backend API Tests for Sarvesh's Portfolio Website
Testing Contact Form API endpoints with validation, rate limiting, and MongoDB integration
"""

import requests
import time
import json
from datetime import datetime
import uuid
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
print(f"Testing backend at: {BACKEND_URL}")

# Test data
VALID_CONTACT_DATA = {
    "name": "Rahul Sharma",
    "email": "rahul.sharma@example.com", 
    "subject": "Interested in your portfolio work",
    "message": "Hi Sarvesh, I came across your portfolio and I'm really impressed with your projects. I would like to discuss a potential collaboration opportunity."
}

INVALID_EMAIL_DATA = {
    "name": "John Doe",
    "email": "invalid-email",
    "subject": "Test subject with valid length",
    "message": "This is a test message that meets the minimum length requirement"
}

SHORT_MESSAGE_DATA = {
    "name": "Jane Smith", 
    "email": "jane.smith@example.com",
    "subject": "Short message test",
    "message": "Too short"  # Less than 10 characters
}

SHORT_NAME_DATA = {
    "name": "A",  # Less than 2 characters
    "email": "test@example.com",
    "subject": "Valid subject for testing",
    "message": "This message has sufficient length to pass validation requirements"
}

def test_api_connection():
    """Test basic API connectivity"""
    print("\n=== Testing API Connection ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/", timeout=10)
        if response.status_code == 200:
            print("✅ API connection successful")
            print(f"Response: {response.json()}")
            return True
        else:
            print(f"❌ API connection failed with status: {response.status_code}")
            return False
    except Exception as e:
        print(f"❌ API connection error: {str(e)}")
        return False

def test_valid_contact_submission():
    """Test valid contact form submission"""
    print("\n=== Testing Valid Contact Submission ===")
    try:
        response = requests.post(f"{BACKEND_URL}/api/contact", json=VALID_CONTACT_DATA, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Verify response structure
            required_fields = ['id', 'name', 'email', 'subject', 'message', 'createdAt', 'status']
            missing_fields = [field for field in required_fields if field not in data]
            
            if missing_fields:
                print(f"❌ Missing fields in response: {missing_fields}")
                return False
                
            # Verify data matches input
            if (data['name'] == VALID_CONTACT_DATA['name'] and 
                data['email'] == VALID_CONTACT_DATA['email'] and
                data['subject'] == VALID_CONTACT_DATA['subject'] and
                data['message'] == VALID_CONTACT_DATA['message'] and
                data['status'] == 'pending'):
                
                print("✅ Valid contact submission successful")
                print(f"Contact ID: {data['id']}")
                print(f"Created At: {data['createdAt']}")
                return data
            else:
                print("❌ Response data doesn't match input data")
                return False
        else:
            print(f"❌ Valid contact submission failed with status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error in valid contact submission: {str(e)}")
        return False

def test_invalid_email():
    """Test invalid email format validation"""
    print("\n=== Testing Invalid Email Validation ===")
    try:
        response = requests.post(f"{BACKEND_URL}/api/contact", json=INVALID_EMAIL_DATA, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error
            print("✅ Invalid email correctly rejected")
            return True
        else:
            print(f"❌ Invalid email not properly validated. Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error testing invalid email: {str(e)}")
        return False

def test_short_message():
    """Test message too short validation"""
    print("\n=== Testing Short Message Validation ===")
    try:
        response = requests.post(f"{BACKEND_URL}/api/contact", json=SHORT_MESSAGE_DATA, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error
            print("✅ Short message correctly rejected")
            return True
        else:
            print(f"❌ Short message not properly validated. Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error testing short message: {str(e)}")
        return False

def test_short_name():
    """Test name too short validation"""
    print("\n=== Testing Short Name Validation ===")
    try:
        response = requests.post(f"{BACKEND_URL}/api/contact", json=SHORT_NAME_DATA, timeout=10)
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:  # Validation error
            print("✅ Short name correctly rejected")
            return True
        else:
            print(f"❌ Short name not properly validated. Expected 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error testing short name: {str(e)}")
        return False

def test_rate_limiting():
    """Test rate limiting (max 5 requests per hour)"""
    print("\n=== Testing Rate Limiting ===")
    try:
        successful_submissions = 0
        
        # Submit 6 requests rapidly
        for i in range(6):
            test_data = VALID_CONTACT_DATA.copy()
            test_data["email"] = f"test{i}@example.com"
            test_data["subject"] = f"Rate limit test {i+1}"
            
            response = requests.post(f"{BACKEND_URL}/api/contact", json=test_data, timeout=10)
            
            print(f"Request {i+1}: Status {response.status_code}")
            
            if response.status_code == 200:
                successful_submissions += 1
            elif response.status_code == 429:
                print(f"Rate limit hit after {successful_submissions} requests")
                if successful_submissions == 5:
                    print("✅ Rate limiting working correctly (5 requests allowed)")
                    return True
                else:
                    print(f"❌ Rate limiting triggered after {successful_submissions} requests instead of 5")
                    return False
            else:
                print(f"❌ Unexpected status code during rate limit test: {response.status_code}")
                
        print(f"❌ Rate limiting not triggered after 6 requests (got {successful_submissions} successful)")
        return False
        
    except Exception as e:
        print(f"❌ Error testing rate limiting: {str(e)}")
        return False

def test_get_contacts():
    """Test retrieving all contact messages"""
    print("\n=== Testing Get All Contacts ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/contact", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            contacts = response.json()
            print(f"Retrieved {len(contacts)} contacts")
            
            if isinstance(contacts, list):
                if len(contacts) > 0:
                    # Check first contact structure
                    contact = contacts[0]
                    required_fields = ['id', 'name', 'email', 'subject', 'message', 'createdAt', 'status']
                    missing_fields = [field for field in required_fields if field not in contact]
                    
                    if missing_fields:
                        print(f"❌ Missing fields in contact: {missing_fields}")
                        return False
                        
                    print("✅ Get contacts successful")
                    print(f"Sample contact: {contact['name']} - {contact['subject']}")
                    return contacts
                else:
                    print("✅ Get contacts successful (empty list)")
                    return []
            else:
                print("❌ Response is not a list")
                return False
        else:
            print(f"❌ Get contacts failed with status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error getting contacts: {str(e)}")
        return False

def test_get_contacts_with_pagination():
    """Test retrieving contacts with limit and skip parameters"""
    print("\n=== Testing Get Contacts with Pagination ===")
    try:
        # Test with limit
        response = requests.get(f"{BACKEND_URL}/api/contact?limit=2", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            contacts = response.json()
            print(f"Retrieved {len(contacts)} contacts with limit=2")
            
            # Test with skip
            response2 = requests.get(f"{BACKEND_URL}/api/contact?skip=1&limit=1", timeout=10)
            if response2.status_code == 200:
                skipped_contacts = response2.json()
                print(f"Retrieved {len(skipped_contacts)} contacts with skip=1&limit=1")
                print("✅ Pagination parameters working")
                return True
            else:
                print(f"❌ Skip parameter test failed: {response2.status_code}")
                return False
        else:
            print(f"❌ Limit parameter test failed: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error testing pagination: {str(e)}")
        return False

def test_contact_stats():
    """Test contact statistics endpoint"""
    print("\n=== Testing Contact Statistics ===")
    try:
        response = requests.get(f"{BACKEND_URL}/api/contact/stats", timeout=10)
        
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            stats = response.json()
            print(f"Response: {stats}")
            
            # Verify stats structure
            required_fields = ['total', 'pending', 'read']
            missing_fields = [field for field in required_fields if field not in stats]
            
            if missing_fields:
                print(f"❌ Missing fields in stats: {missing_fields}")
                return False
                
            # Verify stats are numbers
            for field in required_fields:
                if not isinstance(stats[field], int) or stats[field] < 0:
                    print(f"❌ Invalid {field} value: {stats[field]}")
                    return False
                    
            print("✅ Contact statistics successful")
            print(f"Total: {stats['total']}, Pending: {stats['pending']}, Read: {stats['read']}")
            return stats
        else:
            print(f"❌ Contact stats failed with status: {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Error getting contact stats: {str(e)}")
        return False

def verify_mongodb_storage():
    """Verify that data is properly stored in MongoDB by checking consistency"""
    print("\n=== Verifying MongoDB Storage ===")
    try:
        # Get stats and contacts to verify consistency
        stats_response = requests.get(f"{BACKEND_URL}/api/contact/stats", timeout=10)
        contacts_response = requests.get(f"{BACKEND_URL}/api/contact", timeout=10)
        
        if stats_response.status_code == 200 and contacts_response.status_code == 200:
            stats = stats_response.json()
            contacts = contacts_response.json()
            
            # Check if total matches actual count
            if stats['total'] == len(contacts):
                print("✅ MongoDB storage consistent - stats match contact count")
                
                # Check pending count
                pending_count = sum(1 for contact in contacts if contact['status'] == 'pending')
                if stats['pending'] == pending_count:
                    print("✅ MongoDB storage consistent - pending count matches")
                    return True
                else:
                    print(f"❌ Pending count mismatch: stats={stats['pending']}, actual={pending_count}")
                    return False
            else:
                print(f"❌ Total count mismatch: stats={stats['total']}, actual={len(contacts)}")
                return False
        else:
            print("❌ Could not verify MongoDB storage - API calls failed")
            return False
            
    except Exception as e:
        print(f"❌ Error verifying MongoDB storage: {str(e)}")
        return False

def run_all_tests():
    """Run all backend API tests"""
    print("=" * 60)
    print("BACKEND API TESTS FOR SARVESH'S PORTFOLIO WEBSITE")
    print("=" * 60)
    
    test_results = {}
    
    # Test 1: API Connection
    test_results['api_connection'] = test_api_connection()
    
    if not test_results['api_connection']:
        print("\n❌ API connection failed. Skipping other tests.")
        return test_results
    
    # Test 2: Valid Contact Submission
    test_results['valid_submission'] = test_valid_contact_submission()
    
    # Test 3: Invalid Email Validation
    test_results['invalid_email'] = test_invalid_email()
    
    # Test 4: Short Message Validation
    test_results['short_message'] = test_short_message()
    
    # Test 5: Short Name Validation
    test_results['short_name'] = test_short_name()
    
    # Test 6: Rate Limiting
    test_results['rate_limiting'] = test_rate_limiting()
    
    # Test 7: Get All Contacts
    test_results['get_contacts'] = test_get_contacts()
    
    # Test 8: Pagination
    test_results['pagination'] = test_get_contacts_with_pagination()
    
    # Test 9: Contact Statistics
    test_results['contact_stats'] = test_contact_stats()
    
    # Test 10: MongoDB Storage Verification
    test_results['mongodb_storage'] = verify_mongodb_storage()
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST RESULTS SUMMARY")
    print("=" * 60)
    
    passed_tests = sum(1 for result in test_results.values() if result)
    total_tests = len(test_results)
    
    for test_name, result in test_results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests == total_tests:
        print("🎉 All tests passed! Backend API is working correctly.")
    else:
        print(f"⚠️  {total_tests - passed_tests} test(s) failed. Please review the issues above.")
    
    return test_results

if __name__ == "__main__":
    run_all_tests()