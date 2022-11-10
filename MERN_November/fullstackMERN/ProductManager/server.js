const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require('./server/config/mongoose.config');
require('./server/routes/product.routes')(app);
const PORT = 8000;
    
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) );