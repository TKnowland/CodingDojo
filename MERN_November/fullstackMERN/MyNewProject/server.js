const express = require('express');
const cors = require('cors')
const app = express();
require('./server/config/mongoose.config');
app.use(cors()) 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 8000;
require('./server/routes/person.routes')(app);
    
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`) );