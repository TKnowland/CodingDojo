from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.dojo_model import Dojo

@app.route('/')
def form():
    Dojo.clear_data()
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process_data():
    # session['name'] = request.form['name']
    # session['location'] = request.form['location']
    # session['language'] = request.form['language']
    # session['comments'] = request.form['comments']
    data = {
        "name" : request.form['name'],
        "location" : request.form['location'],
        "language" : request.form['language'],
        "comment" : request.form['comment']
    }
    if not Dojo.validate_info(data):
        return redirect('/')
    Dojo.save_data(data)
    return redirect('/result')

@app.route('/result')
def show_data():
    dojo = Dojo.get_info()
    return render_template('info.html', info = dojo)
