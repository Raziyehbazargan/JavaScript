function Shape(type) {
    this.type = type;
}

let circle = new Shape('Circle');


//ES6 version uses class
class Shape {
    constructor(type) {
        this.type = type
    }
}

let square = new Shape('Square');
