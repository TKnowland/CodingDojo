from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = "dojos_and_ninjas_schema"


class Ninja:
    def __init__(self, data):
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        result = connectToMySQL(DATABASE).query_db(query)
        ninjas = []
        for ninja in result:
            ninjas.append(cls(ninja))
        return ninjas
    
    @classmethod
    def get_dojo(cls, id):
        query = "SELECT * FROM ninjas WHERE ninjas.dojo_id = %(id)s;"
        result = connectToMySQL(DATABASE).query_db(query, id)
        ninjas = []
        for ninja in result:
            ninjas.append(cls(ninja))
        print(ninjas)
        return ninjas

    @classmethod
    def save(cls, data):
        query = "INSERT INTO ninjas (first_name, last_name, age, dojo_id, created_at, updated_at) VALUES ( %(first_name)s, %(last_name)s, %(age)s, %(dojo_id)s , NOW() , NOW() );"
        return connectToMySQL(DATABASE).query_db( query, data )