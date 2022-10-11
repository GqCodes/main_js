/**********
 CLOSURES - a function runs, a function executes and never runs again. BUT it remembers the references to the variables so the child scope always has access to the parent scope.
 *********/

const first = () => {
  const greet = "hi";
  const second = () => {
    alert(greet);
  };
  return second;
};
// these variables are locally scoped

const newFunc = first();
newFunc();

/********
CURRYING - the process of converting a function, that takes multiple args into a fiunction that takes the one at a time
 *******/
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3); // returns (b) => a * b;
curriedMultiply(3)(4); //this would resullt 12
// now you can store the first function as a variabe ex.
const multiplyBy5 = curriedMultiply(5); //so now a is stored as 5
multiplyBy5(5); // 25
multiplyBy5(10); // 50
multiplyBy5(11); // 55

/*******
COMPOSE - the act of putting 2 functions together to form a 3rd function where the output of 1 function is the input of the other 
********/
const compose = (f, g) => (a) => f(g(a));
// EXAMPLE of compose
const sum = (num) => num + 1;
compose(sum, sum)(5); //the output is 7. the 5 goes into the a spot. and the the functions run which are just num + 1. so (g(a)) is sum + 1 which is 5 + 1 = 6. then the same thing happens but now the num is 6. so num + 1 or 6 + 1 = 7.

/***************************************** 
 AVOIDING SIFE EFFECT AND FUNCTIONAL PURITY
 *****************************************/
let a = 1;
function b() {
  a = 2;
}
// this is a side effect. it is changing something outside of the function.
// functional purity is the process of avoiding side effect and always returning something
