/* SPREAD OPERATOR - works similar to cloning */
let obj = { a: "a", b: "b", c: "c" };
let clone = Object.assign({}, obj); //this clones the object instead of assigning clone = obj;
let clone2 = { ...obj };

obj.c = 5;
console.log(obj);
console.log(clone);
console.log(clone2);
