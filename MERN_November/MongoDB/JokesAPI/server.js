const express = require("express");
const app = express();
const PORT = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));
// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");


// This is where we import the users routes function from our user.routes.js file
const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(PORT, () => console.log("The server is all fired up on port 8000"));
