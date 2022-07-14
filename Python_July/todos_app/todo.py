from mysqlconnection import connectToMySQL

class Todo:
    def __init__(self, data):
        self.id = data['id']
        self.description = data['description']
        self.status = data['status']
        # self.created_at = data['created_at']
        # self.updated_at = data['updated_at']
        self.user_id = data['users_id']
    
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM todos;"
        
        result = connectToMySQL('todos_db').query_db(query)
        list_todos = []
        for todo in result:
            list_todos.append(cls(todo))
        return list_todos
    
    @classmethod
    def create(cls, data):
        query = "INSERT INTO todos(description, status, users_id) VALUES(%(description)s, %(status)s, %(users_id)s)"
        
        result = connectToMySQL('todos_db').query_db(query, data)
        return result
    

'''
SELECT
get_all()
get_one()

INSERT 
create()
save()

UPDATE
update_one()
edit_one()

DELETE
delete_one()
remove_one()
'''