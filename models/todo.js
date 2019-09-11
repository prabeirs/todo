var mongoose = require("mongoose");

// Define our schema
var todoSchema = new mongoose.Schema({
    name: {
    	type: String,
    	required: "Name cannot be blank!"
    },
    completed: {
    	type: Boolean,
    	default: false
    },
    created_date: {
    	type: Date,
    	default: Date.now
    }
});

var Todo = mongoose.model("Todo", todoSchema); // save to to a variable- the model. compiled.
// Export/Add it to a module. So when we require this file we essentially get this Todo model
module.exports = Todo;

// The schema layout/fields
// name
// completed
// created_data
