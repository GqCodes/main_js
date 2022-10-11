// create element
const li = document.createElement("li");

// Add class
li.className = "collection-item";

// Add ID
li.id = "new-item";

// Add attribute
li.setAttribute("title", "New Item");

// create a text node & append
li.appendChild(document.createTextNode("Hello World"));

// create new link element
const link = document.createElement("a");
// Add classes
link.className = "delete-item secondary-content";
// Add icon HTML
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append LI as child to UL
document.querySelector("ul.collection").appendChild(li);

console.log(li);
