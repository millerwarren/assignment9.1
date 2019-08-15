var todos = ['dishes', 'laundry', 'walk the dog'];
// prompt a user "What would you like to do"
var question = prompt("What would you like to do");

while (question != "quit") {
    //if the user says "list" print to console their list
    if (question == 'list') {
        console.log(todos);
        //If the user says "new", prompt them to add a new todo
    } else if (question == 'new') {
        var newTodo = prompt("Add new todo");
        todos.push(newTodo);

    }
    var question = prompt("What would you like to do?");
}

console.log("You have quit the app!");
//if the user says "quit" print to console "you have quit the app"