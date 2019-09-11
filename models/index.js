// When we require this file in outer index.js via by requiring the models dir it will automatically look for this in models directory
var mongoose = require("mongoose");
mongoose.set('debug', true);

mongoose.connect("mongodb://localhost/todo-api"); // db get created auto when actioned

mongoose.Promise = Promise; //going to use Promises syntax

module.exports.Todo = require("./todo"); // Include the todo.js in this same (models) dir