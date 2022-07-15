from flask import Flask, render_template, redirect, session, request
from user import User
app = Flask(__name__)


@app.route('/')
def show_users():
    users = User.get_all()
    return render_template("users.html", users = users)


@app.route('/user/<id>')
def user_info(id):
    data = {
        "id": id
    }
    user = User.get_one(data)
    return render_template("user_info.html", user = user)

@app.route('/new')
def create_user():
    return render_template("new_user.html")

@app.route('/process', methods = ['POST'])
def new_user():
    data = {
        "first_name": request.form["first_name"],
        "last_name": request.form['last_name'],
        "email": request.form['email']
    }
    User.save(data)
    return redirect('/')


@app.route('/edit/<id>')
def edit_user(id):
    data = {
        "id": id
    }
    user = User.get_one(data)
    return render_template("edit_user.html", user = user)


@app.route('/update/<id>', methods = ['POST'])
def update(id):
    data = {
        "id": id,
        "first_name": request.form["first_name"],
        "last_name": request.form['last_name'],
        "email": request.form['email']
    }
    User.update(data)
    return redirect('/')

@app.route('/destroy/<id>')
def remove_user(id):
    data = {
        "id": id
    }
    User.remove(data)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug = True)