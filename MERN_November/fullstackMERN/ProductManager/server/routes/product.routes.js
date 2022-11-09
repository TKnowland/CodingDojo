const productsController = require('../controllers/products.controller');
module.exports = function(app){
    app.get('/api/products', productsController.getAll);
    app.get('/api/products/:id', productsController.getOne);
    app.post('/api/products', productsController.create);
    app.put('/api/products/update/:id', productsController.update);
    app.delete('/api/products/delete/:id', productsController.delete);
}

