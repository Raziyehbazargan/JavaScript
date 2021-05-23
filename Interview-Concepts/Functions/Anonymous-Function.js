//What's a typical use case for anonymous functions?

/*
1- They can be used in IIFEs to encapsulate some code within a local scope so that variables declared in it do not leak to the 
global scope.
(function () {
  // Some code here.
})();


2- As a callback that is used once and does not need to be used anywhere else. The code will seem more self-contained and readable
when handlers are defined right inside the code calling them, rather than having to search elsewhere to find the function 
body.

setTimeout(function () {
  console.log('Hello world!');
}, 1000);


3- Arguments to functional programming constructs or Lodash (similar to callbacks).
const arr = [1, 2, 3];
const double = arr.map(function (el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]

*/