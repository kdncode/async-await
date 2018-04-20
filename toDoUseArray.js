/* 
html

todo list 

'new' - add a todo
'list' - list all todos
'quit' - quit app

*/

var todos = ['Study reactjs'];

var input = prompt('What would you like to do?');

while( input !== 'quit' ) {

     // Handle input
    if ( input === 'list') {
        console.log(todos);
    } else if ( input === 'new') {

        // Ask for new todo 
        var newToDo = prompt('Enter a task');

        // Add to todos array
        todos.push(newToDo);
    }

    // Ask again for new input
    input = prompt('What would you like to do?');
}

// If user enters 'quit'
console.log('You quit the app');