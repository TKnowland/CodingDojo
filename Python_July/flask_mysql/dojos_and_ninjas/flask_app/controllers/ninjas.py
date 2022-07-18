from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.ninja import Ninja


@app.route('/new/ninja')
def new_ninja():
    return render_template('ninjas.html')


@app.route('/process/ninja', methods = ['POST'])
def add_ninja():
    data = {
        "first_name" : request.form['first_name'],
        "last_name" : request.form['last_name'],
        "age" : request.form['age'],
        "dojo_id" : request.form['dojo']
    }
    Ninja.save(data)
    print(data)
    return redirect('/dojos')