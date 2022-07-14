from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = "megaballs"

@app.route('/')
def form():
    return render_template('index.html')

@app.route('/process', methods=['POST'])
def process_data():
    session['name'] = request.form['name']
    session['location'] = request.form['location']
    session['language'] = request.form['language']
    session['comments'] = request.form['comments']
    return redirect('/result')

@app.route('/result')
def show_data():
    return render_template('info.html', name = session['name'], location = session['location'], language = session['language'], comment = session['comments'])


if __name__ == "__main__":
    app.run(debug=True)