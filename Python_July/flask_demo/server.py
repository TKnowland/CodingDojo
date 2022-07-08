from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')        

def hello_world():
    
    num_of_hellos = 10
    
    return render_template("index.html", times=num_of_hellos)  
if __name__=="__main__":      
    app.run(debug=True)    

