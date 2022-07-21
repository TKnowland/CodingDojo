from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def save(cls, data):
        query = "INSERT INTO users(first_name, last_name, email, password, created_at, updated_at)"
        query += "VALUES(%(first_name)s, %(last_name)s, %(email)s, %(password)s, NOW(), NOW());"
        
        result = connectToMySQL(DATABASE).query_db(query, data)
        return result

    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL(DATABASE).query_db(query, data)
        if not result:
            return False
        return result[0]
    
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        result = connectToMySQL(DATABASE).query_db(query)
        users = []
        for user in result:
            users.append(user)
        return users
    
        
    @staticmethod
    def validate_info(user):
        is_valid = True
        emails = User.get_all()
        
        if len(user['first_name']) < 3:
            flash("First Name must be at least 3 characters", "error_first_name")
            is_valid = False
        if len(user['last_name']) < 3:
            flash("Last Name must be at least 3 characters", "error_last_name")
            is_valid = False
        if not EMAIL_REGEX.match(user['email']):
            flash("INVALID EMAIL", "error_email")
            is_valid = False
        for email in emails:
            if user['email'] == email['email']:
                flash("EMAIL ALREADY IN USE", "error_email")
                is_valid = False
        if user['password'] != user['confirm_password']:
            flash("Passwords do not match", "error_password")
            is_valid = False
        if len(user['password']) < 8:
            flash("Password must be at least 8 characters", "error_password")
        return is_valid