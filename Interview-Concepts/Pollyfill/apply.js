//how apply works : bind the object to it so the function.
//With apply() , you can write a method once and then inherit it in another object, without having to rewrite the method for the new object

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

print.apply(person, ['Seattle', 'WA']);
print.call(employee, ['Newyork', 'Newyork']);


Function.prototype.customApply = function(currentContext = {}, arg = []) {
    console.log(currentContext)

    if (typeof this !== 'function') {
        throw new Error(this + "cannot be bound as it's not callable");
    }

    if (!Array.isArray(arg)) {
        throw new TypeError('CreateListFromArrayLike called on non-object')
    }
    
    currentContext.fn = this;
    currentContext.fn(...arg);
}