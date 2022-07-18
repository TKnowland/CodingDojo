from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.models.dojo import Dojo
from flask_app.models.ninja import Ninja


@app.route('/show/<dojo>')
def dojo(dojo):
    data = {
        "id" : dojo
    }
    dojo = Dojo.get_one(data)
    ninjas = Ninja.get_dojo(data)
    return render_template('show_dojo.html', dojo = dojo, ninjas = ninjas)