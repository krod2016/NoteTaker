//all connected routes and access routes to html file and api file
const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");

//express launch of localhost webpage
const app = express();
const PORT = process.env.PORT || 3001; 

//app usage of express, links to routes, and listen launch of starting server using npm start
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});