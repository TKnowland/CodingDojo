from flask import Flask
app = Flask(__name__)
app.secret_key = "megaballs"
DATABASE = "email_schema"

