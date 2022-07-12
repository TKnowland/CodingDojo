# from crypt import methods
import re
from flask import Flask, render_template, redirect, request  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"



list_of_users = [
{
    "first_name" : "Tre",
    "last_name" : "Knowland",
    "id" : 1
},
{
    "first_name" : "smell",
    "last_name" : "bad",
    "id" : 2
},
{
    "first_name" : "eat",
    "last_name" : "sand",
    "id" : 3
}
]

list_of_todos = [
{
    "description": "ljal",
    "status": "AAAAAAA",
    "id" : 1,
    "user_id" : 1
},
{
    "description": "ljal",
    "status": "AAAAAAA",
    "id" : 2,
    "user_id" : 2
},
{
    "description": "joia",
    "status": "hm",
    "id" : 3,
    "user_id" : 1
}
]

@app.route('/todos')
def get_todos():
    return render_template('todos.html', todos = list_of_todos)

@app.route('/todo/form')
def display_todo_form():
    return render_template('todo_form.html', users = list_of_users)

@app.route('/todo/new', methods = ['post'])
def create_todo():
    new_todo = {
        "id": request.form['id'],
        "description": request.form['description'],
        "status": request.form['status'],
        "user_id": request.form['user_id']
    }
    list_of_todos.append(new_todo)
    return redirect('/todos')

"""
Method: GET
Getting ALL of a particular type
Url: '/todos'
Function: get_todos()
          get_all_todos()

Method: GET
Getting ONE of a particular type
Url: '/todo/<int:id>'
Function: get_todo_by_id( id )

Method: GET
Displaying a form for a type
Url: '/todo/form'
Function: display_todo_form()


Method: POST
creating a new type
Url: '/todo/new'
Function: create_todo()

"""


if __name__=="__main__":   # Ensure this file is being run directly and not from a different module    
    app.run(debug=True)    # Run the app in debug mode.

