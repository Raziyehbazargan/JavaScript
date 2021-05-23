//https://yangshun.github.io/front-end-interview-handbook/en/javascript-questions#explain-event-delegation

if (typeof Object.create !== 'function') {
    Object.create = function(parent) {
        function Tmp() {
            tmp.prototype = parent;
            return new Tmp();
        }
    }
}

const Parent = function () {
    this.name = 'Parent';
};
  
Parent.prototype.greet = function () {
    console.log('hello from Parent');
};

const child = Object.create(Parent.prototype);

const child = Object.create(Parent.prototype);

child.cry = function () {
  console.log('waaaaaahhhh!');
};

child.cry();
// Outputs: waaaaaahhhh!

child.greet();
// Outputs: hello from Parent