from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'super secret key'

@app.route('/')
def counter():
    if 'count' in session:
        session['count'] += 1
    else:
        session['count'] = 0
    if 'number' not in session:
        session['number'] = 0
    return render_template("index.html", count = session['count'], num = session['number'])

@app.route('/increment_num', methods=['POST'])
def increment_num():
    session['number'] = int(session['number']) + int(request.form['num'])
    return redirect('/')


@app.route('/destroy_session')
def destroy():
    session.clear()
    return redirect('/')

if __name__=="__main__":   
    app.run(debug=True)