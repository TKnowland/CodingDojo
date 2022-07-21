from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.models.recipe_model import Recipe

@app.route('/display/recipe/new')
def display_create_recipe():
    return render_template('create_recipe.html')

@app.route('/recipes')
def display_recipes():
    if 'email' not in session:
        return redirect('/')
    list_recipes = Recipe.get_all_with_users()
    return render_template('recipes.html', list_recipes = list_recipes)

@app.route('/recipe/create', methods = ['POST'])
def create_recipe():
    if Recipe.validate_recipe(request.form) == False:
        return redirect('/display/recipe/new')
    
    data = {
        **request.form,
        "user_id" : session['user_id']
    }


    Recipe.create(data)
    #validate
    #create the recipe
    #
    return redirect('/recipes')


@app.route('/recipes/<int:id>')
def display_one(id):
    if 'email' not in session:
        return redirect('/')
    data = {
        "id" : id
    }
    current_recipe = Recipe.get_one_with_user(data)
    print(data['id'])
    return render_template("recipe.html", current_recipe = current_recipe)

@app.route('/recipes/<int:id>/update')
def display_update_recipe(id):
    if 'email' not in session:
        return redirect('/')
    data = {
        "id" : id
    }
    current_recipe = Recipe.get_one_with_user(data)
    return render_template("update_recipe.html", recipe = current_recipe)

@app.route('/recipe/update/<int:id>')
def update_recipe(id):
    if Recipe.validate_recipe(request.form) == False:
        return redirect(f'/recipes/{id}/update')
    recipe_data = {
        **request.form,
        "id" : id
    }
    Recipe.update_one(recipe_data)
    return redirect('/recipes')

@app.route('/recipes/<int:id>/delete')
def delete_recipe(id):
    data = {
        "id": id
    }
    Recipe.delete_one(data)
    return redirect('/recipes')