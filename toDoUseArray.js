/* 
html

todo list 

'new' - add a todo
'list' - list all todos
'delete' - delete a task
'quit' - quit app

*/

var tasks = [''];

var input = prompt('What would you like to do?');

while( input !== 'quit' ) {

     // Handle input
    if ( input === 'list') {

        tasks.forEach(function(todo, i) {
            console.log(i + ": " + todo);
        })

    } else if ( input === 'new') {

        // Ask for new todo 
        var newToDo = prompt('Enter a task');

        // Add to todos array
        tasks.push(newToDo);
        console.log('Added a task')
    
    } else if ( input === 'delete') {
        
        // ask for index of todo to be deleted 
        var index = prompt('Enter index of task to delete');

        // Delete that task using splice(index, how many tasks)
        tasks.splice(index, 1);
        console.log('Deleted task');
    } 

    // Ask again for new input
    input = prompt('What would you like to do?');
}

// If user enters 'quit'
console.log('You quit the app');