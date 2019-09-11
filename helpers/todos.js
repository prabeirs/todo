var db = require("../models");

exports.getTodos = function(req, res) {
	//res.send("HELLO FROM TODOS ROUTES");
	db.Todo.find()
	.then(function(todos){
		res.json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.createTodo = function(req, res) {
   //res.send("THIS IS THE POST ROUTE!"); 
   //console.log(">>>", req.body);
   db.Todo.create(req.body)
   .then(function(newTodo) {
   	    res.status(201).json(newTodo);
   })
   .catch(function(err) {
   	    res.send(err);
   })
}

exports.getTodo = function(req, res) { // anything after GET /api/todos/XXXX
   db.Todo.findById(req.params.todoid)
   .then(function(foundTodo) {
   	    res.json(foundTodo);
   })
   .catch(function(err) {
   	    res.send(err);
   })
}
exports.updateTodo = function(req, res) {
	//res.send("UPDATE ROUTE!");
	db.Todo.findOneAndUpdate({_id: req.params.todoid}, req.body, {new: true})
	.then(function(todo) {
		res.json(todo);
	})
	.catch(function(err) {
		res.send(err);
	});
}

exports.deleteTodo = function(req, res) {
    //res.send("OK OK I' LL DELETE THIS");
    db.Todo.remove({_id: req.params.todoid})
    .then(function() {
    	res.json({message: "Successfully deleted it!"});
    })
    .catch(function(err) {
    	res.send(err);
    })
}


module.exports = exports;