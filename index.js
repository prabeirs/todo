var express = require("express"),
    app = express(),
    port = 3000,
    bodyParser = require("body-parser");

var todoRoutes = require("./routes/todos"); // this variable contains the exports of our routes/todos.js file.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views")); // Referecing the curr dir , views and then index.html

// app.get("/", function(req, res) {
//     //res.send("HI THERE FROM EXPRESS!!") // Passing a plain string.
//     //res.send("{data: 1234}") // this is a string
//     //res.json("{data: 1234}") // this is a json
//     res.send({message: "HI, FROM JS OBJECT!"}); // Passing in a JS object . Converts it to a string and then send as a Json. This is same as res.json(...)
// });

// app.get("/happy", function(req, res) {
//     res.send(":-)")
// });

app.get("/", function(req, res) {
	//res.send("HELLO FROM THE ROOT ROUTE");
	res.sendFile("index.html");
}); // this is from our app's

app.use("/api/todos", todoRoutes); // this is from our app's routes

app.listen(port, function() {
	console.log("APP IS RUNNING ON PORT 3000");
});