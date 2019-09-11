var express = require("express");
var router = express.Router();
var db = require("../models"); // it will automatically require the index file.
var helpers = require("../helpers/todos");

//router.get("/", );
//router.post("/", );
router.route("/")
.get(helpers.getTodos)
.post(helpers.createTodo);

// router.get("/:todoid", );
// router.put("/:todoid", );
// router.delete("/:todoid", );
router.route("/:todoid")
.get(helpers.getTodo)
.put(helpers.updateTodo)
.delete(helpers.deleteTodo)


// Export it from here
module.exports = router;