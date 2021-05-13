"use strict";
class Queue {
    constructor() {
        this.items = [];
        this.front = null;
        this.back = null
    }

    isEmpty() {
        return this.items.length == 0;
    }

    getFront() {
        if (!this.isEmpty()) return this.items[0];

        return null;  
    }

    size() {
        return this.items.length;
    }

    enQueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty) return null;
        return this.items.shift();
    }
}

export default Queue;
