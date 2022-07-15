from flask import Flask, render_template, redirect, session, request
from user import User
app = Flask(__name__)


@app.route('/')
def show_users():
    users = User.get_all()
    print(users)
    return render_template("users.html", users = users)


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
    print(data)

    User.save(data)
    return redirect('/')


if __name__ == "__main__":
    app.run(debug = True)