from flask_app.config.mysqlconnection import connectToMySQL
from flask_bcrypt import Bcrypt 
bcrypt = Bcrypt(app)

class Model:
    pass