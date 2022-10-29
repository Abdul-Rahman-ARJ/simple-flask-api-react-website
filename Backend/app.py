from flask import Flask, jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return jsonify({"a" : "abdul", 
            "b": "rahman",
            "c": "This is me"
            })

if __name__ == '__main__':
    app.run(debug=True)