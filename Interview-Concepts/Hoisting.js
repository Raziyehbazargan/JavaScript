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

During the compile phase, just microseconds before your code is executed, 
it is scanned for function and variable declarations. All these functions and variable declarations are added to the memory 
inside a JavaScript data structure called Lexical Environment. 

So that they can be used even before they are actually declared in the source code.
All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations 
are initialized with undefined, but let and const declarations remain uninitialized.
They will only get initialized when their lexical binding (assignment) is evaluated during runtime by the JavaScript engine. 
This means you can’t access the variable before the engine evaluates its value at the place it was declared in the source code.
 This is what we call “Temporal Dead Zone”, A time span between variable creation and its initialization where they 
 can’t be accessed.

*/