//how bind works : create a copy and bind the objext to it so the function can be invoke later.

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


let printPersonFullName  = print.customBind(person);
printFullName();

let printEmployeeFullName  = print.customBind(employee);
printFullName('WA');

Function.prototype.customBind = function(...args) {
    let fn = this;  //points to print function
    if (typeof fn !== 'function') {
        throw new Error(this + "cannot be bound as it's not callable");
      }

    let obj = arg[0];
    let params = args.alice(1);
    return function (...args2) {
        fn.apply(obj, [...params, ...args2]);
    }
}


Function.prototype.customBind2 = function(currentContext = {}, ...args) {
    if (typeof this !== 'function') {
        throw new Error(this + "cannot be bound as it's not callable");
      }

    currentContext.fn = this;
    return function (...args2) {
        currentContext.fn([...args, ...args2]);
    }
}