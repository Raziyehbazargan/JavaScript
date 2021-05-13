class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    isEmpty() {
        return this.items.length == 0;
    }

    getTop() {
        if (!this.isEmpty()) return this.top;

        return null;
    }

    size() {
        return this.items.length;
    }

    push(element) {
        this.items.push(element);
        this.top = element;
    }

    pop() {
        if (this.isEmpty()) return null;
        let lastElement = this.items.pop();
        this.top = this.isEmpty() ? null : this.items[this.items.length - 1];
        return lastElement;
    }
}