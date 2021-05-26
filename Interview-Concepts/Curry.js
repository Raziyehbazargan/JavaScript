/*
Currying is a pattern where a function with more than one parameter is broken into multiple functions that, 
when called in series, will accumulate all of the required parameters one at a time. 
This technique can be useful for making code written in a functional style easier to read and compose. 
It's important to note that for a function to be curried, it needs to start out as one function, then broken out into
a sequence of functions that each accepts one parameter.
*/

function add(a, b) {
    return a + b;
}
  
function add_curry(a) {
    return function (b) {
        return a + b;
    }
}

//using bind
let addition = add.bind(this, 2);
add(4);