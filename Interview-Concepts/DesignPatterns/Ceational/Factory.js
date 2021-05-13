class IceCreamFactory {
    constructor() {
        this.createIceCream = fucntion(flavor) {
            let iceCream;
            if (flavor === 'chocolate') {
                iceCream = new chocolate();
            } else if (flavor === 'mint') {
                iceCream = new Mint();
            } else if (flavor === 'strawberry'){
                iceCream = new Strawberry();
            } 

            return iceCream;
        }
    }
}


class chocolate {
    constructor() {
        this.icecreamFlavor = "chocolate";
        this.message = function() {
          return `You chose the ${this.icecreamFlavor} flavor.`;
        };
      }
}

class Mint {
    constructor() {
      this.icecreamFlavor = "mint";
      this.message = function() {
        return `You chose the ${this.icecreamFlavor} flavor.`;
      };
    }
  }
  
class Strawberry {
    constructor() {
      this.icecreamFlavor = "strawberry";
      this.message = function() {
        return `You chose the ${this.icecreamFlavor} flavor.`;
      };
    }
  }


// creating objects
const iceCreamfactory = new IceCreamFactory();

const chocolate = iceCreamfactory.createIcecream('chocolate');
const mint = iceCreamfactory.createIcecream('mint');
const strawberry = iceCreamfactory.createIcecream('strawberry');

console.log(chocolate.message()); 
console.log(mint.message()); 