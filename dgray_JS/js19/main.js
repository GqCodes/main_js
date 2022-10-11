// JSON JavaScript Object Notation
/*
JSON is used to send & receive data.
JSON is a text format that is completely language inddependent.
Meaning JSON is used to send & receive data in many languages
...not just in JavaScript
*/

const myObj = {
  name: "chris",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

// JSON conversion. JSON does not send functions.
const sendJSON = JSON.stringify(myObj); //converts object to a string
console.log(sendJSON);
console.log(typeof sendJSON);

console.log(sendJSON.name); // this won't work because it's not an object anymore, its a string

const receiveJSON = JSON.parse(sendJSON); //when JSON is received we parse() the string to turn it back into an object
console.log(receiveJSON);
console.log(typeof receiveJSON);
