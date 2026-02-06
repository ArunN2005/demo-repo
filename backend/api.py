
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Legacy Database (In-Memory)
users = [
    {"id": 1, "name": "Admin", "role": "superuser"},
    {"id": 2, "name": "Guest", "role": "viewer"}
]

@app.route('/api/status', methods=['GET'])
def get_status():
    return jsonify({"system": "online", "version": "1.0.4 (Legacy)"})

@app.route('/api/users', methods=['GET'])
def get_users():
    return jsonify(users)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
