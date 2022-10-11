// factory function - another way to create an object in JS. This allows to have true private properties(varibles) because of scope
function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Baking a ${size} ${crust} crust pizza`),
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake();

// SUPER CLASSES
class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original";
  }
  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
}

// the underscore is used to say these are meant to be private
