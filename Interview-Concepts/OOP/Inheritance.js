//Classical Inheritance
/*In Classical Inheritance, Objects are still abstractions of real world 'things', 
but we can only refer to Objects through Classes. Classes are a Generalization of an object. 
In other words, Classes are an abstraction of an object of a real world thing. 
(Classes, then, are an abstraction of an abstraction of a real-world thing). 
Since a Class is yet another reference to (or abstraction of) its predecessor, each descendant child Class 
increases the level of abstraction, thus increasing the level of generalization.
*/
class Shoe {
    constructor(size, color, material) {
        this.size = size;
        this.color = color;
        this.material = material;
    }

    changeColor(newColor) {
        return this.color = newColor;
    }

    wearDown() {
        return this.size--;
    }
}

class Boot extends Shoe {
  constructor(size, color, material, type){
      super(size, color, material);
      this.type = type;
  }
}

var shoe = new Shoe('L', 'White', 'XXX');
var boot = new Boot('M', 'Black', 'YYY', 'Sport');


//Prototypal  Inheritance

/*
As opposed to Classical Inheritance, Prototypal Inheritance does not deal with increasing layers of abstraction. 
An Object is either an abstraction of a real-world thing, same as before, or is a direct copy of another Object 
(in other words, a Prototype). Objects can be created from thin air, or they can be created from other objects: 
The abstraction level here is never deeper than 1; 
The only abstraction that occurs with Prototypal Inheritance is the abstraction away from real-world things.*/


//ES5
function Person(name) {
    this.name = name;
}

//The main difference in the constructor comes when using inheritance. If we want to create a Student 
//class that subclasses Person and add a studentId field, this is what we have to do in addition to the above.

function Student(name, studentId) {
    Person.call(this, name);
    this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;



//ES6
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, studentId) {
        super(name);
        this.studentId = studentId;
    }
}