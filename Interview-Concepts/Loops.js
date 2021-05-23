/*
The main difference between .forEach and .map() is that .map() returns a new array. 
If you need the result, but do not wish to mutate the original array, .map() is the clear choice. 
If you simply need to iterate over an array, forEach is a fine choice.
*/
//forEach
/*
Iterates through the elements in an array.
Executes a callback for each element.
Does not return a value.
*/
const a = [1, 2, 3];
a.forEach((num, index) => {
    //Do something
})

//map
/*Iterates through the elements in an array.
"Maps" each element to a new element by calling the function on each element, creating a new array as a result.
*/
const doubled = a.map((num) => {
    return num * 2;
})

//result:  doubled = [2, 4, 6]


