//alert("Hi from app js");
$(document).ready(function() {
	$.getJSON("/api/todos")
	.then(addTodos)

	$("#todoInput").keypress(function(event) {
		if (event.which == 13) {
			//console.log("YOU HIT ENTER!");
			createTodo();
		}
	});

	$(".list").on("click", "li", function() {
		//alert("CLICKED");
		//console.log($(this)); // The li that is clicked.
		updateTodo($(this));
	});

	$(".list").on("click", "span", function(event) {
		event.stopPropagation(); // Stop the event from bubbling up. So when we click the span it also not going to fire click on the li.
		removeTodo($(this).parent());
	});
});

function addTodos(todos) { // this is a callback fn
	// add todos to page here
	todos.forEach(function(todo) { // this is a callback fn
        addTodo(todo);
	});
}

function addTodo(todo) {
	//console.log(todo.name);
        var newTodo = $("<li class=\"task\">" + todo.name + " <span>X</span></li>");
        newTodo.data("id", todo._id);
        newTodo.data("completed", todo.completed);
        if (todo.completed) {
        	newTodo.addClass("done");
        }
        $(".list").append(newTodo);
}

function createTodo() {
	// send request to create new todo
	var usrInput = $("#todoInput").val();
	//console.log(usrInput);
	$.post("/api/todos", {name: usrInput})
	.then(function(newTodo) {
		//console.log(newTodo);
		$("#todoInput").val("");
		addTodo(newTodo);
	})
	.catch(function(err) {
		console.log(err);
	});
}

function removeTodo(todo) {
	//console.log("CLICKED");
	var clickedId = todo.data("id");
	var deleteUrl = "/api/todos/" + clickedId;
	//$(this).parent().remove();
	$.ajax({
		method: "DELETE",
		url: deleteUrl

	})
	.then(function(data) {
		console.log(data);
		todo.remove();
	})
	.catch(function(err) {
		console.log(err);
	});
}

function updateTodo(todo) {
	//console.log(todo.data("completed"));
	var updateUrl = "/api/todos/" + todo.data("id");
	var isDone = !todo.data("completed"); // flip it (opposite to the present view) in the Db.
	var updateData = {completed: isDone};
	//console.log(updateData);
	$.ajax({
		method: "PUT",
		url: updateUrl,
		data: updateData
	})
	.then(function(updatedTodo) {
		//console.log(updatedTodo);
		todo.toggleClass("done");
		todo.data("completed", isDone);
	});
}






