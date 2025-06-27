# 🚀 Deployment Guide

## 🔧 Backend (Flask) Deployment on Render
1. Create a new web service on [Render](https://render.com/)
2. Set build command: `pip install -r requirements.txt`
3. Set start command: `python app.py`
4. Add environment variable `OPENAI_API_KEY` with your key

## 🌐 Frontend (React) Deployment on Vercel
1. Connect to GitHub repo in [Vercel](https://vercel.com/)
2. Select `frontend/` as root directory
3. Vercel auto-installs and deploys React app

## ✅ Notes
- Ensure CORS is enabled on backend for frontend requests
- Use environment variables for keys and secrets
- Consider using HTTPS tunneling for local development (e.g., ngrok)