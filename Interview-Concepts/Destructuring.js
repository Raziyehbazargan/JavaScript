/*
Destructuring is an expression available in ES6 which enables a succinct and convenient way 
to extract values of Objects or Arrays and place them into distinct variables.
*/

//Array destructuring
const foo = ['one', 'two', 'three'];
const [one, two, three] = foo;
console.log(one); // "one"
console.log(two); // "two"
console.log(three); // "three"

//Object destructuring

const person = { pname: 'Razi', age: 33 };
const {pname, age } = person;

console.log(pname); //Razi
console.log(age);   //33

