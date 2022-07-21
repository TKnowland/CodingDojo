from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.email import Email


@app.route('/')
def input_email():
    return render_template('input.html')

@app.route('/validate', methods = ['POST'])
def validate():
    data = {
        **request.form
    }
    valid = Email.validate_email(data)
    if valid:
        Email.save(data)
        return redirect('/emails')
    return redirect('/')

@app.route('/emails')
def show_emails():
    emails = Email.get_all()
    return render_template('emails.html', emails = emails)

@app.route('/delete/<int:id>')
def delete_email(id):
    data = {
        "id" : id
    }
    Email.remove_one(data)
    return redirect('/emails')
    