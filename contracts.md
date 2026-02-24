# API Contracts & Integration Plan

## Overview
This document defines the API contracts between frontend and backend, mock data mapping, and integration strategy for Sarvesh's AI/ML portfolio website.

## Architecture
- **Frontend**: React (port 3000) - uses REACT_APP_BACKEND_URL from .env
- **Backend**: FastAPI (port 8001) - all routes prefixed with `/api`
- **Database**: MongoDB - connection via MONGO_URL from backend .env

## Current Mock Data (frontend/src/mock.js)
- `personalInfo`: Personal details, contact info
- `skillsData`: Categorized technical skills
- `experience`: Work history with achievements
- `projects`: Project details with tech stack
- `caseStudies`: Detailed project case studies
- `certifications`: List of certifications
- `awards`: List of awards
- `education`: Education details
- `whyHireMe`: Key differentiators

## Backend API Endpoints

### 1. Contact Form Submission
**Endpoint**: `POST /api/contact`

**Request Body**:
```json
{
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response**:
```json
{
  "id": "uuid",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "createdAt": "datetime",
  "status": "pending"
}
```

**Database Collection**: `contacts`

### 2. Get All Contact Messages (Admin)
**Endpoint**: `GET /api/contact`

**Response**: Array of contact messages with metadata

### 3. Portfolio Data Endpoints (Optional - for dynamic updates)
**Endpoint**: `GET /api/portfolio/projects`
**Endpoint**: `GET /api/portfolio/experience`
**Endpoint**: `GET /api/portfolio/skills`

## MongoDB Collections

### contacts
```javascript
{
  _id: ObjectId,
  id: String (UUID),
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: DateTime,
  status: String (pending/read/responded)
}
```

### portfolio_data (Optional - for future admin panel)
```javascript
{
  _id: ObjectId,
  dataType: String (projects/experience/skills),
  content: Object,
  updatedAt: DateTime
}
```

## Frontend Integration Changes

### File: `frontend/src/components/Contact.js`
**Current**: Mock submission with setTimeout
**Change**: Replace with actual API call to `POST /api/contact`

```javascript
const response = await axios.post(`${API}/contact`, formData);
```

**Error Handling**: Show toast for success/error states

## Implementation Priority

### Phase 1: Contact Form (Required)
1. Create MongoDB model for contacts
2. Implement POST /api/contact endpoint with validation
3. Add error handling and rate limiting
4. Update Contact.js to use real API
5. Test form submission

### Phase 2: Admin View (Optional)
1. Implement GET /api/contact endpoint
2. Create simple admin page to view messages
3. Add basic authentication

### Phase 3: Dynamic Portfolio Data (Future)
1. Move mock data to MongoDB
2. Create API endpoints for CRUD operations
3. Build admin panel for content management

## Validation Rules

### Contact Form
- name: Required, 2-100 characters
- email: Required, valid email format
- subject: Required, 5-200 characters
- message: Required, 10-2000 characters

## Security Considerations
- Input sanitization for all form fields
- Rate limiting on contact form (max 5 submissions per hour per IP)
- CORS configuration already set in backend
- Environment variables for sensitive data

## Testing Strategy
1. Unit tests for API endpoints
2. Integration tests for database operations
3. Frontend form validation testing
4. End-to-end testing with actual submissions

## Notes
- Resume download currently points to `/resume.pdf` - needs actual PDF file
- Social media links in mock.js need to be updated with real URLs
- Email field in personalInfo is currently placeholder
