from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.dojo import Dojo


@app.route('/dojos')
def show_dojos():
    dojos = Dojo.get_all()
    return render_template('dojos.html', dojos = dojos)

@app.route('/new/dojo', methods = ['POST'])
def new_dojo():
    data = {
        "name" : request.form['name']
    }
    Dojo.save(data)
    return redirect('/dojos')

@app.route('/new/ninja')
def give_dojos():
    dojos = Dojo.get_all()
    return render_template('ninjas.html', dojos = dojos)

