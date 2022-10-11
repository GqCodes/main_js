/**
 * EVENTS
 */

// const button = document.getElementsByTagName("button")[0]; // getElementsByTagName returns an array so you need to specifiy which element you want to access

// const button = document.querySelector("button");

// button.addEventListener("click", (e) => {
//   console.log("CLICK");
// });
// button.addEventListener("mouseenter", (e) => {
//   console.log("ENTER");
// });
// button.addEventListener("mouseleave", (e) => {
//   console.log("LEAVE");
// });

/**
 * ADDING to a list
 */

let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");

// always good to test that its working first
// button.addEventListener("click", (e) => {
//   console.log("click is working");
// });

// this click event allows you to add text to the UL

// button.addEventListener("click", () => {
//   if (input.value.length > 0) {
//     // creates the LI variable
//     let li = document.createElement("li");

//     // adds text to the LI itself
//     //   li.appendChild(document.createTextNode("testing"));
//     li.appendChild(document.createTextNode(input.value));

//     // adds the LI WITH the text to the UL
//     ul.appendChild(li);

//     // clear the input box
//     input.value = "";
//   }
// });

// Listening for the enter key to submit instead of having to click with mouse
// USING javascript char codes, you can use a specific code to listen for a specific key being pressed

// input.addEventListener("keypress", (e) => {
//   // apparently keyCode is deprecated but still works
//   if (input.value.length > 0 && e.keyCode === 13) {
//     // creates the LI variable
//     let li = document.createElement("li");

//     // adds text to the LI itself
//     //   li.appendChild(document.createTextNode("testing"));
//     li.appendChild(document.createTextNode(input.value));

//     // adds the LI WITH the text to the UL
//     ul.appendChild(li);

//     // clear the input box
//     input.value = "";
//   }
// });

/**
 * REFACTORED CODE FROM ABOVE
 */
function inputLength() {
  return input.value.length;
}

function createListElement() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
