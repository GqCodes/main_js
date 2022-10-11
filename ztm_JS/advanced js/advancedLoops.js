const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
};
/* FOR OF LOOP */
// this is iterating - which can be done over arrays or strings
for (item of basket) {
  console.log(item);
}

/* FOR IN LOOP */
// this works with objects - allows us to loop over & see the properties of an object, this is called enumerating
for (item in detailedBasket) {
  console.log(item);
}
