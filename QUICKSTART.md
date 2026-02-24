# 🚀 Quick Start Guide

## Prerequisites
- Node.js v18+ ([Download](https://nodejs.org/))
- Python 3.9+ ([Download](https://www.python.org/))
- MongoDB v4.4+ ([Download](https://www.mongodb.com/try/download/community))
- Yarn: `npm install -g yarn`

## 5-Minute Setup

### 1. Extract & Navigate
```bash
unzip portfolio-sarvesh-pawar.zip
cd portfolio-sarvesh-pawar
```

### 2. Start MongoDB
```bash
# macOS (Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod

# Windows
net start MongoDB
```

### 3. Setup Backend
```bash
cd backend
python3 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt

# Copy local environment
cp .env.local .env
```

### 4. Setup Frontend
```bash
cd ../frontend
yarn install

# Copy local environment
cp .env.local .env
```

### 5. Run Application

**Terminal 1 (Backend):**
```bash
cd backend
source venv/bin/activate        # Windows: venv\Scripts\activate
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

**Terminal 2 (Frontend):**
```bash
cd frontend
yarn start
```

### 6. Open Browser
- **Portfolio**: http://localhost:3000
- **API Docs**: http://localhost:8001/docs

## ✅ Verify Installation

Test the contact form:
1. Go to http://localhost:3000
2. Scroll to Contact section
3. Fill and submit the form
4. Should see "Message sent!" toast

## 📝 Next Steps

1. **Update Personal Info**: Edit `frontend/src/mock.js`
   - Change email, LinkedIn, GitHub links
   - Update skills, projects, experience

2. **Test Everything**:
   - Test dark/light theme toggle
   - Check all sections load correctly
   - Submit contact form

3. **Deploy**: See SETUP_README.md for deployment instructions

## 🆘 Need Help?

**MongoDB not running?**
```bash
# Verify MongoDB status
mongosh
```

**Port already in use?**
```bash
# Kill process on port 3000
lsof -i :3000 | grep LISTEN | awk '{print $2}' | xargs kill -9

# Kill process on port 8001
lsof -i :8001 | grep LISTEN | awk '{print $2}' | xargs kill -9
```

**Dependencies issue?**
```bash
# Frontend
cd frontend && rm -rf node_modules && yarn install

# Backend
cd backend && pip install --force-reinstall -r requirements.txt
```

## 📚 Full Documentation

See `SETUP_README.md` for:
- Detailed setup instructions
- API documentation
- Deployment guide
- Troubleshooting
- Customization tips

---

**Questions?** Check SETUP_README.md or contact Sarvesh Pawar
