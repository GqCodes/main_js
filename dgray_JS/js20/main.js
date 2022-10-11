// JS Error & Error Handling

"use strict";
const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("odd number");
      }
      console.log("Even Number!");
    } catch (err) {
      console.error(err);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};

makeError();

// the finally block will execute no matter what
// catch will only execute if there is an error
// any code in the try block will not execute if there is an error
