// Modules

// importing
import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerPicking } from "./guitars.js";
import User from "./user.js";

console.log(playGuitar());
console.log(shred());
console.log(fingerPicking());

const me = new User("email@email.com", "chris");
console.log(me);
console.log(me.greeting());

// modules usually used in a prjoect with Babel (used to translate ES6 JS to "older" JS)

// used along with a bundler with webpack or parcel. used to bundle code into one file.
