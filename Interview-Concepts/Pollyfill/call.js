//how call works : bind the object to it so the function.
//With call() , you can write a method once and then inherit it in another object, without having to rewrite the method for the new object

let person = {
    firstName: 'Razi',
    lastName: 'bazargan',
};

let employee = {
    firstName: 'sam',
    lastName: 'mill',
}

let print = function(city, state) {
    let fullName = `${this.firstName} ${this.lastName} - lives in ${city} ${state}`;
    console.log(fullName);
}

print.call(person, 'Seattle', 'WA');
print.call(employee, 'Newyork', 'Newyork');


Function.prototype.customCall = function(currentContext = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "cannot be bound as it's not callable");
      }
    
    currentContext.fn = this;
    currentContext.fn(...args);
}