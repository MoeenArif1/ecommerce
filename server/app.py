from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():  # put application's code here
    return 'Hello wosdfld!'

@app.route("/members")
def members():
    print("here")
    return {"members": ["members1", "member2", "Member"]}


if __name__ == '__main__':
    app.run()
