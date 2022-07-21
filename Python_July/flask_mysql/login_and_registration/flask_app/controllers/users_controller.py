from ssl import VerifyFlags
from flask_app import app
from flask import render_template,redirect,request,session, flash
from flask_app.models.user_model import User
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app)


@app.route('/')
def display_login():
    session.clear()
    return render_template('login.html')

@app.route('/register', methods = ['POST'])
def register_user():
    data = {
        **request.form
    }   
    
    if User.validate_info(data):
        pw_hash = bcrypt.generate_password_hash(request.form['password'])
        data['password'] = pw_hash
        User.save(data)
        email = {
            "email" : data['email']
        }
        user = User.get_one(email)
        session['user'] = user['email']
        return redirect('/user/info')
    return redirect('/')

@app.route('/user/info')
def display_user():
    data = {
        "email" : session['user']
    }
    user = User.get_one(data)
    return render_template('user.html', user = user)

@app.route('/login', methods = ['POST'])
def validate_login():
    is_valid = True
    
    data = {
        "email" : request.form['log_email']
    }
    
    user = User.get_one(data)
    
    if not user:
        flash("Email or password is incorrect")
        is_valid = False
        return redirect('/')
    
    if not bcrypt.check_password_hash(user['password'], request.form['log_password']):
        flash("Email or password is incorrect")
        is_valid = False
        return redirect('/')
    
    if is_valid:
        session['user'] = user['email']
        return redirect('/user/info')