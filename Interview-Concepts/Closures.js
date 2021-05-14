//A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

//function along with it's lexical scope bundle together forms a closure
function outer() {
    var a = 0;
    function inner() {
        a++;
        console.log(a);
    }
    return inner;
}

var y = outer();
y();  //output: 1
y();  //output: 2
y();  //output: 3


//print numbers 1 - 5  : because let is block scope it forms a closure and in each iteration callback function get bind with a new copy of i
function printNumbers() {
    for(let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }

    console.log('Hello Javascript!');
}

//no let
function printNumbers() {
    for(var i = 1; i <= 5; i++) {
        function wrapper(a) {
            setTimeout(() => {
                console.log(a)
            }, a * 1000);
        }

        wrapper(i);
    }

    console.log('Hello Javascript!');
}
printNumbers();

//---------------------------------------------------
//closure is used in data hiding and encapsulation
function counter() {
    var counter = 0; //private no other code ca access this variable or to modify it.
    return function increamentCounter() {
        counter++;
        console.log(counter);
    }
}

function Counter() {
    var count = 0 ;
    this.increament = function() {
        count++;
        console.log(count);
    }

    this.decrement = function() {
        count--;
        console.log(count);
    }
}