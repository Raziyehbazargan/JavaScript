//null, undefined or undeclared

//1- undeclared
/* Undeclared variables are created when you assign a value to an identifier that is not previously created using var, let or const. 
Undeclared variables will be defined globally, outside of the current scope. In strict mode, a ReferenceError will be thrown when 
you try to assign to an undeclared variable. Undeclared variables are bad just like how global variables are bad. 
Avoid them at all cost! To check for them, wrap its usage in a try/catch block.
*/

function foo(){
    x = 1; 
}

//2- undefined 
/*A variable that is undefined is a variable that has been declared, but not assigned a value. 
It is of type undefined. If a function does not return any value as the result of executing it is assigned to a variable, 
the variable also has the value of undefined. To check for it, compare using the strict equality (===) operator or 
typeof which will give the 'undefined' string. Note that you should not be using the abstract equality operator to check, 
as it will also return true if the value is null.
*/

var foo;
console.log(foo); // undefined
console.log(foo === undefined); // true
console.log(typeof foo === 'undefined'); // true

console.log(foo == null); // true. Wrong, don't use this to check!

function bar() {}
var baz = bar();
console.log(baz); // undefined

//3- null
/* A variable that is null will have been explicitly assigned to the null value. 
It represents no value and is different from undefined in the sense that it has been explicitly assigned. 
To check for null, simply compare using the strict equality operator. Note that like the above, you should not 
be using the abstract equality operator (==) to check, as it will also return true if the value is undefined. */
var foo = null;
console.log(foo === null); // true
console.log(typeof foo === 'object'); // true

console.log(foo == undefined); // true. Wrong, don't use this to check!