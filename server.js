//Package Requirements
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
//Boilerplate Setup
var app = express();
var PORT = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//MySQL Connection
var connection = mysql.createConnection({
    host: "localhost",
    user: "ClassUser",
    password: "password",
    database: "task_saver_db",
    port: 3307
});
//Connectng to MySQL
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as id " + connection.threadId);
});

//Routes



//Start the Server
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});