/*
Hoisting is a term used to explain the behavior of variable declarations in your code. 
Variables declared or initialized with the var keyword will have their declaration "moved" up to the top of 
their module/function-level scope, which we refer to as hoisting. 
However, only the declaration is hoisted, the assignment (if there is one), will stay where it is.

Note that the declaration is not actually moved - the JavaScript engine parses the declarations during 
compilation and becomes aware of declarations and their scopes. 
It is just easier to understand this behavior by visualizing the declarations as being hoisted to the top of their scope. 
Let's explain with a few examples.
*/

console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

/*
Function declarations have the body hoisted while the function expressions 
(written in the form of variable declarations) only has the variable declaration hoisted.

*/

// Function Declaration
console.log(foo); // [Function: foo]
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
console.log(foo); // [Function: foo]

// Function Expression
console.log(bar); // undefined
bar(); // Uncaught TypeError: bar is not a function
var bar = function () {
  console.log('BARRRR');
};
console.log(bar); // [Function: bar]


/*
Variables declared via let and const are hoisted as well. 
However, unlike var and function, they are not initialized and accessing them before the declaration
will result in a ReferenceError exception.
The variable is in a "temporal dead zone" from the start of the block until the declaration is processed.
*/