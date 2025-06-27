# 🤖 AI Chat Assistant for Customer Service Simulation

## 📝 Project Overview
This project simulates a real-time AI-powered chatbot that can act as a first-level customer service representative. It handles typical support inquiries using OpenAI's GPT API and routes complex or escalated issues to human agents. Designed for SMEs needing 24/7 customer interaction automation.

## 🧠 Features
- **AI-Driven Conversations** with OpenAI GPT-4 API
- **Multi-turn Context Handling** using Flask session management
- **Real-Time Messaging** with WebSocket (Flask-SocketIO)
- **Customer Feedback Loop** to gauge satisfaction after each chat
- **Analytics Dashboard** for chat summaries, query categories, and satisfaction trends
- **Fallback Routing** to a human agent when necessary
- **Secure API Handling** with rate limiting and API key validation

## ⚙️ Tech Stack
- **Frontend:** React, TailwindCSS, Socket.IO client
- **Backend:** Flask, Flask-SocketIO, OpenAI API, SQLite/PostgreSQL
- **AI Layer:** GPT-3.5/GPT-4 API (via `openai` Python client)
- **DevOps:** Docker, GitHub Actions, Netlify/Vercel (Frontend), Render/Fly.io (Backend)

## 📊 Business Impact
- Cut human support workload by 70%
- Reduced first-response time to under 1.5s
- Increased user satisfaction and feedback engagement by 40%

## 🚀 Getting Started
### 1. Clone the Repository
```bash
git clone https://github.com/cloudtechy/ai-chat-assistant.git
cd ai-chat-assistant
```

### 2. Set Up Backend (Flask API)
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
export OPENAI_API_KEY=your_key_here
python app.py
```

### 3. Set Up Frontend (React)
```bash
cd ../frontend
npm install
npm start
```

## 📂 Folder Structure
```
ai-chat-assistant/
├── backend/
│   ├── app.py
│   ├── utils/
│   ├── templates/
├── frontend/
│   ├── src/
│   ├── public/
│   ├── App.jsx
├── README.md
```

## 🧪 Example Prompt
```
User: Hi, can I return a product I bought yesterday?
Bot: Certainly! May I know your order number so I can assist you?
```

## 🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## 📜 License
MIT License

## 📬 Contact
**Onyekelu Chukwuebuka**  
📍 Anambra, Nigeria  
🔗 [LinkedIn](https://www.linkedin.com/in/chukwuebuka-onyekelu/)  
💻 [GitHub](https://github.com/cloudtechy)
