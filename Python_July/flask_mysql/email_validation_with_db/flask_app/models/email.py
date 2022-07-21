from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
from flask_app import DATABASE
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class Email:
    def __init__(self, data):
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails"
        result = connectToMySQL(DATABASE).query_db(query)
        emails = []
        for email in result:
            emails.append(email)
        return emails
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO emails(email, created_at) VALUES(%(email)s, NOW())"
        result = connectToMySQL(DATABASE).query_db(query, data)
        return result

    
    @classmethod
    def remove_one(cls, id):
        query = "DELETE FROM emails WHERE id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, id)
        return result
    
    @staticmethod
    def validate_email(user):
        is_valid = True
        emails = Email.get_all()
        
        if not EMAIL_REGEX.match(user['email']):
            flash("INVALID EMAIL")
            is_valid = False
        for email in emails:
            if user['email'] == email['email']:
                flash("EMAIL ALREADY IN USE")
                is_valid = False
        return is_valid
    