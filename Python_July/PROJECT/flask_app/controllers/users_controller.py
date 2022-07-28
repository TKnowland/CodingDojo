from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.user_model import Model
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app)


@app.route('/')
def display_registration():
    return render_template('registration.html')

@app.route('/login')
def display_login():
    return render_template('login.html')