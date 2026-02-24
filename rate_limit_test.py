#!/usr/bin/env python3
"""
Specific Rate Limiting Test - Testing from same session to ensure same IP
"""

import requests
import time
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv('/app/frontend/.env')

# Get backend URL from environment
BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
print(f"Testing rate limiting at: {BACKEND_URL}")

def test_rate_limiting_same_session():
    """Test rate limiting using a single session to ensure same IP"""
    print("\n=== Testing Rate Limiting with Single Session ===")
    
    # Use a session to maintain same connection
    session = requests.Session()
    
    try:
        successful_submissions = 0
        rate_limited = False
        
        # Submit requests one by one
        for i in range(7):  # Try 7 requests to be sure
            test_data = {
                "name": f"Test User {i+1}",
                "email": f"ratetest{i+1}@example.com", 
                "subject": f"Rate limit test submission {i+1}",
                "message": f"This is test message number {i+1} for rate limiting validation. It meets the minimum length requirement."
            }
            
            print(f"\nSubmitting request {i+1}...")
            response = session.post(f"{BACKEND_URL}/api/contact", json=test_data, timeout=10)
            
            print(f"Request {i+1}: Status {response.status_code}")
            if response.status_code != 200:
                print(f"Response: {response.text}")
            
            if response.status_code == 200:
                successful_submissions += 1
                print(f"✅ Request {i+1} successful")
            elif response.status_code == 429:
                print(f"🛑 Rate limit triggered after {successful_submissions} successful requests")
                rate_limited = True
                break
            else:
                print(f"❌ Unexpected status code: {response.status_code}")
                break
                
            # Small delay between requests
            time.sleep(0.5)
        
        if rate_limited and successful_submissions == 5:
            print("✅ Rate limiting is working correctly!")
            return True
        elif rate_limited:
            print(f"⚠️ Rate limiting triggered but after {successful_submissions} requests instead of 5")
            return False
        else:
            print(f"❌ Rate limiting not triggered after {successful_submissions} requests")
            return False
            
    except Exception as e:
        print(f"❌ Error testing rate limiting: {str(e)}")
        return False
    finally:
        session.close()

def check_rate_limit_status():
    """Check current rate limit status by trying one more request"""
    print("\n=== Checking Current Rate Limit Status ===")
    try:
        test_data = {
            "name": "Status Check User",
            "email": "statuscheck@example.com",
            "subject": "Checking if rate limit is still active",
            "message": "This is a test to see if rate limiting is currently active for this IP address."
        }
        
        response = requests.post(f"{BACKEND_URL}/api/contact", json=test_data, timeout=10)
        print(f"Status check: {response.status_code}")
        
        if response.status_code == 429:
            print("🛑 Rate limit is currently active")
            return "active"
        elif response.status_code == 200:
            print("✅ Rate limit not active (or reset)")
            return "inactive"
        else:
            print(f"❌ Unexpected response: {response.status_code}")
            return "error"
            
    except Exception as e:
        print(f"❌ Error checking rate limit status: {str(e)}")
        return "error"

if __name__ == "__main__":
    print("=" * 50)
    print("FOCUSED RATE LIMITING TEST")
    print("=" * 50)
    
    # First check if we're currently rate limited
    status = check_rate_limit_status()
    
    if status == "active":
        print("\n⚠️ Already rate limited. Waiting might be needed for a fresh test.")
        print("However, this confirms that rate limiting is working.")
    else:
        # Run the focused rate limiting test
        result = test_rate_limiting_same_session()
        
        if result:
            print("\n🎉 Rate limiting test PASSED")
        else:
            print("\n❌ Rate limiting test FAILED")