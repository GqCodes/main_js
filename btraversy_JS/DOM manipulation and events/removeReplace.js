// replace element

// create element
const newHeading = document.createElement("h2");
// Add ID
newHeading.id = "task-title";
// New Text Node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
// Parent
const cardAction = document.querySelector(".card-action");

// replace
cardAction.replaceChild(newHeading, oldHeading);

// console.log(newHeading);

// remove element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// remove list item
lis[0].remove();

// remove child element
list.removeChild(lis[3]);

// classes & attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;

// classes
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

// attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
link.setAttribute("title", "Google");
val = link.hasAttribute("title");
link.removeAttribute("title");
val = link;

console.log(val);
