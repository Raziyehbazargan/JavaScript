let instance = null;

class Pritner {
    constructor(pages) {
        this.display = function() {
            console.log(`You are connected to the printer. You want to print ${pages} pages.`)
        }
    }

    static getInstance(numOfPages) {
        if (!instance) {
            instance = new Printer(numOfpages);
        }

        return instance;
    }
}

var obj1 = Printer.getInstance(2)
console.log(obj1)
obj1.display()
var obj2 = Printer.getInstance(3)
console.log(obj2)
obj2.display()
console.log(obj2 == obj1)