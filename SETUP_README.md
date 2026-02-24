# Sarvesh Pawar - AI/ML Portfolio Website

A modern, professional portfolio website for an AI/ML & Generative AI Engineer built with React, FastAPI, and MongoDB.

## 🚀 Features

- **Monochrome Design**: Clean black, white, and gray color scheme
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Interactive Sections**: Hero, About, Skills, Projects, Experience, Case Studies, Contact
- **Contact Form**: Integrated with backend API, includes validation and rate limiting
- **Project Showcase**: Detailed project cards with modal views
- **Admin Features**: View contact submissions via API endpoints

## 📋 Tech Stack

### Frontend
- React 19
- TailwindCSS
- shadcn/ui components
- Lucide React icons
- Axios for API calls
- React Router DOM

### Backend
- FastAPI
- MongoDB with Motor (async driver)
- Pydantic for validation
- Python 3.9+

## 🛠️ Local Setup Instructions

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Yarn** (v1.22+) - Install with `npm install -g yarn`
- **Python** (v3.9+) - [Download](https://www.python.org/)
- **MongoDB** (v4.4+) - [Download](https://www.mongodb.com/try/download/community)

### Step 1: Clone/Extract the Project

```bash
# Extract the zip file to your desired location
unzip portfolio-sarvesh-pawar.zip
cd portfolio-sarvesh-pawar
```

### Step 2: MongoDB Setup

1. **Start MongoDB** (if not already running):

   **On macOS/Linux:**
   ```bash
   # Using Homebrew (macOS)
   brew services start mongodb-community
   
   # Or directly
   mongod --dbpath ~/data/db
   ```

   **On Windows:**
   ```bash
   # Start MongoDB service
   net start MongoDB
   
   # Or run mongod.exe directly
   "C:\Program Files\MongoDB\Server\7.0\bin\mongod.exe" --dbpath="C:\data\db"
   ```

2. **Verify MongoDB is running:**
   ```bash
   # Connect to MongoDB shell
   mongosh
   # You should see a MongoDB shell prompt
   ```

### Step 3: Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create Python virtual environment
python3 -m venv venv

# Activate virtual environment
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

# Install Python dependencies
pip install -r requirements.txt

# Verify .env file exists with correct settings
cat .env
# Should contain:
# MONGO_URL="mongodb://localhost:27017"
# DB_NAME="portfolio_database"
# CORS_ORIGINS="*"
```

### Step 4: Frontend Setup

```bash
# Open a new terminal
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Update .env file for local development
# Edit frontend/.env and change REACT_APP_BACKEND_URL to:
# REACT_APP_BACKEND_URL=http://localhost:8001
```

**Edit `frontend/.env`:**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
WDS_SOCKET_PORT=3000
ENABLE_HEALTH_CHECK=false
```

### Step 5: Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # On Windows: venv\Scripts\activate
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

You should see:
```
INFO:     Uvicorn running on http://0.0.0.0:8001
INFO:     Application startup complete.
```

**Terminal 2 - Frontend:**
```bash
cd frontend
yarn start
```

You should see:
```
Compiled successfully!
You can now view frontend in the browser.
  Local:            http://localhost:3000
```

### Step 6: Access the Application

1. **Frontend**: Open http://localhost:3000 in your browser
2. **Backend API Docs**: Open http://localhost:8001/docs for Swagger UI
3. **Test Contact Form**: Fill out the contact form and submit

## 📁 Project Structure

```
portfolio-sarvesh-pawar/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/              # shadcn components
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Experience.js
│   │   │   ├── CaseStudies.js
│   │   │   ├── Contact.js
│   │   │   └── Footer.js
│   │   ├── context/
│   │   │   └── ThemeContext.js
│   │   ├── hooks/
│   │   │   └── use-toast.js
│   │   ├── mock.js              # Mock data (update with real info)
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   ├── .env
│   ├── package.json
│   └── tailwind.config.js
│
├── backend/
│   ├── models/
│   │   └── contact.py
│   ├── routes/
│   │   └── contact.py
│   ├── server.py
│   ├── .env
│   └── requirements.txt
│
├── contracts.md                  # API contracts documentation
└── README.md                     # This file
```

## 🔧 Configuration

### Updating Personal Information

Edit `frontend/src/mock.js` to update:
- Personal info (name, email, phone, LinkedIn, GitHub)
- Skills and technologies
- Work experience
- Projects and case studies
- Education and certifications

### Environment Variables

**Backend (`.env`):**
```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="portfolio_database"
CORS_ORIGINS="*"
```

**Frontend (`.env`):**
```env
REACT_APP_BACKEND_URL=http://localhost:8001
```

## 🧪 Testing

### Test Backend API

```bash
# Test contact form submission
curl -X POST http://localhost:8001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "Test Subject",
    "message": "This is a test message with more than 10 characters."
  }'

# Get all contact submissions
curl http://localhost:8001/api/contact

# Get contact statistics
curl http://localhost:8001/api/contact/stats
```

### Access API Documentation

Open http://localhost:8001/docs in your browser to see interactive API documentation.

## 📊 MongoDB Collections

The application creates the following collections:

- **contacts**: Stores contact form submissions
  - `id`: Unique identifier
  - `name`: Sender's name
  - `email`: Sender's email
  - `subject`: Message subject
  - `message`: Message content
  - `createdAt`: Timestamp
  - `status`: pending/read/responded

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)

1. Update `REACT_APP_BACKEND_URL` in `.env` to your production backend URL
2. Build the frontend: `yarn build`
3. Deploy the `build` folder to Vercel or Netlify

### Backend Deployment (Heroku/Railway/Render)

1. Update `MONGO_URL` to your production MongoDB URL (MongoDB Atlas)
2. Set environment variables on your hosting platform
3. Deploy the backend folder

### MongoDB Atlas Setup

1. Create account at https://www.mongodb.com/cloud/atlas
2. Create a cluster (free tier available)
3. Get connection string and update `MONGO_URL` in backend `.env`

## 🐛 Troubleshooting

### MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution**: Make sure MongoDB is running:
```bash
# Check if MongoDB is running
pgrep mongod

# Start MongoDB
brew services start mongodb-community  # macOS
sudo systemctl start mongod            # Linux
net start MongoDB                      # Windows
```

### Port Already in Use
```
Error: EADDRINUSE: address already in use :::3000
```
**Solution**: Kill the process using the port:
```bash
# Find process using port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill the process
kill -9 <PID>  # macOS/Linux
```

### Module Not Found Error
```
Error: Cannot find module 'xyz'
```
**Solution**: Reinstall dependencies:
```bash
# Frontend
cd frontend && rm -rf node_modules && yarn install

# Backend
cd backend && pip install -r requirements.txt
```

## 📝 API Endpoints

### Contact Form

**POST `/api/contact`**
- Submit contact form
- Rate limit: 5 requests per hour per IP
- Validation: name (2-100), email (valid), subject (5-200), message (10-2000)

**GET `/api/contact`**
- Get all contact messages
- Query params: `limit` (default: 100), `skip` (default: 0)

**GET `/api/contact/stats`**
- Get contact statistics (total, pending, read)

## 🎨 Customization

### Update Theme Colors

Edit `frontend/src/index.css` to customize the monochrome theme:
```css
:root {
  --background: 0 0% 100%;  /* White */
  --foreground: 0 0% 3.9%;  /* Near black */
  /* ... other variables */
}

.dark {
  --background: 0 0% 3.9%;  /* Near black */
  --foreground: 0 0% 98%;   /* Near white */
  /* ... other variables */
}
```

### Add New Sections

1. Create new component in `frontend/src/components/`
2. Import and add to `frontend/src/App.js`
3. Update navigation in `frontend/src/components/Header.js`

## 📄 License

This project is created for portfolio purposes.

## 👤 Contact

**Sarvesh Pawar**
- Email: sarvesh@example.com (update in mock.js)
- LinkedIn: [Update in mock.js]
- GitHub: [Update in mock.js]

---

**Built with ❤️ using React, FastAPI, and MongoDB**
