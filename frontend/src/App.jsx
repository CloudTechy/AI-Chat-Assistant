import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    socket.emit('user_message', { message: input });
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
  };

  useEffect(() => {
    socket.on('bot_response', (data) => {
      setMessages((prev) => [...prev, { sender: 'bot', text: data.response }]);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-xl mx-auto bg-white shadow p-4 rounded">
        <h2 className="text-xl font-bold mb-4">AI Chat Assistant</h2>
        <div className="h-64 overflow-y-auto mb-4 border p-2">
          {messages.map((msg, i) => (
            <div key={i} className={msg.sender === 'user' ? 'text-right' : 'text-left'}>
              <p className="bg-blue-100 inline-block px-2 py-1 rounded my-1">{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border px-2 py-1 rounded-l"
          />
          <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;