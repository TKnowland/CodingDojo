from flask_app.config.mysqlconnection import connectToMySQL
from flask_app import DATABASE
from flask import flash

class Dojo:
    def __init__(self, data):
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def save_data(cls, data):
        query = "INSERT INTO dojos(name, location, language, comment) VALUES(%(name)s, %(location)s, %(language)s, %(comment)s);"
        result = connectToMySQL(DATABASE).query_db(query, data)
        return result
    
    @classmethod
    def get_info(cls):
        query = "SELECT * FROM dojos"
        result = connectToMySQL(DATABASE).query_db(query)
        info = []
        for user in result:
            info.append(user)
        return info

    @classmethod
    def clear_data(cls):
        query = "DELETE FROM dojos;"
        result = connectToMySQL(DATABASE).query_db(query)
        return result

    
    @staticmethod
    def validate_info(data):
        is_valid = True
        if len(data['name']) < 1:
            flash("Name field cannot be empty")
            is_valid = False
        if data['location'] == '':
            flash("Please select a location")
            is_valid = False
        if data['language'] == '':
            flash("Please select a language")
            is_valid = False
        if  len(data['comment']) < 1:
            flash("Comment field cannot be empty")
            is_valid = False
        return is_valid
            