from flask import Flask, request, jsonify
from flask_socketio import SocketIO, emit
import openai
import os

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins='*')

openai.api_key = os.getenv("OPENAI_API_KEY")

@app.route('/api/prompt', methods=['POST'])
def prompt():
    data = request.get_json()
    user_message = data.get("message", "")

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": user_message}]
    )
    return jsonify({"response": response.choices[0].message["content"]})

@socketio.on('user_message')
def handle_user_message(data):
    message = data.get('message', '')
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": message}]
    )
    emit('bot_response', {'response': response.choices[0].message["content"]})

if __name__ == '__main__':
    socketio.run(app, debug=True)