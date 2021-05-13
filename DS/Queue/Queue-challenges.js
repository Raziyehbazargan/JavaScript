'use strict'
const Queue = require('./Queue.js');

/*
Implement a function findBin(n), which will generate binary numbers from 11 to nn in the form of a string using a queue. 
Input: 3
Output: ['1','10','11']
*/
function findBin(number) {
    if (number <= 0) return;
    let binResult = [],
        queue = new Queue(),
        element = null;

    queue.enqueue('1');
    while (number-- > 0) {
        element = queue.dequeue();
        binResult.push(element);
        
        queue.enqueue(`${element}0`);
        queue.enqueue(`${element}1`);
    }
    
    return binResult;
}