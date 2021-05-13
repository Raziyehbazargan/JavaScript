//Object-oriented programming is a popular programming paradigm centered around objects rather than functions. 
//he main principles of object-oriented programming as they relate to JavaScript are encapsulation, abstraction, inheritance, and polymorphism.

/*Encapsulation is the process of combining data and functions into a single unit called a class. 
Public functions, which can be accessed, are called methods. 
In Encapsulation, the data, or state, is not accessed directly. 
Rather, it is accessed through those public methods (functions) which are present inside of the class. 
This serves to hide the internal representation, or state, of an object from the outside. 
By hiding specific information and controlling access to the object’s internal state you achieve what is known as 
information hiding. More simply, attributes of the class are kept private, while public methods work to manipulate
 and interact with those attributes. Encapsulation, therefore, makes the concept of data hiding possible.*/

 let employee = {
    baseSalary: 30000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary * (this.overtime * this.rate);
    }
};

/*
Benefit of OOP:
    - using Encapsulation we group related variables and functions together and this way we can reduce complexity.
    - using Abstraction, we hide the details and complexity and show only the essintials this technique reduces complexity and isolate the impact of changes in the code 
    - using Inheritance we can eliminate redundent code 
    - using Polymorphism we can refactor ugly switch statements
*/

/*Abstraction extends the idea of encapsulation described above. 
It is the process of abstracting away the data that should be hidden from the user. 
Thus, you are able to only show relevant data while away hiding unnecessary details of an object. 
For example, consider driving an automatic vehicle. You simply need to know how to turn the steering wheel and move 
the gears through the whole array of options from drive to reverse. You don’t have to know every detail about what
is happening under the hood as you drive the car. You simply need to know how to drive it. 
The detailed mechanical processes of the car’s engine are abstracted away.
Abstraction and Encapsulation together help you maintain a large code base.*/


/*Inheritance allows software developers to inherit commonalities between different objects.
 This permits reuse of common logic while simultaneously extracting out particular logic into a
separate class. It allows for the formation of a hierarchy by creating a child class through the process of 
deriving methods from a separate parent class. In doing this, the child class is able to recycle all fields 
and methods of its parent class while creating its own unique methods.
Inheritance help us eleminate redundent code.*/

/*Polymorphism allows you to write a single function which can handle many data-types. 
It is very similar to the concept of abstraction described above. In Greek, polymorphism 
simply means “many shapes.” It allows a variable, function or object to take on many shapes or 
multiple forms. By taking advantage of the concept of inheritance, polymorphism allows software 
developers to design objects that share certain behaviors while also having the option of overriding 
those shared behaviors in favor of more specific ones.
*/