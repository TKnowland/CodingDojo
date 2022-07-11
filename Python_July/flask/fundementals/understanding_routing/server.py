from flask import Flask, render_template
app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Hello, World!"

@app.route('/dojo')
def dojo():
    return "Dojo!"

@app.route('/say/<name>')
def hi(name):
    return f"hi {str(name)}"

@app.route('/repeat/<quantity>/<item>')
def repeat(item, quantity):
    return render_template("index.html", times = int(quantity), message = str(item))

if __name__=="__main__":
    app.run(debug=True)