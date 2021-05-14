function taskOne() {
    console.log('task 1');
}

function taskTwo() {
    console.log('task 2');
}

function taskThree() {
    console.log('task 3');
}

setTimeout(taskOne, 3000);  //call a function after a given time

taskTwo();
taskThree();

// we need to prevent  task 2 to run before task1, for this we need to create a callback function

const message = function() {
    console.log('This message is shown after 3 seconds');
}

setTimeout(message, 3000);

/*
Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.

In JavaScript, the way to create a callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed.
*/

function attackEventListner() {
    let count = 0;
    document
    .getElementById('btn')
    .addEventListener('click', function() {
        console.log('button is clicked', ++count);
    });
}

attackEventListner();