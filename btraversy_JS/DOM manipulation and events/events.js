// ***EVENT OBJECT***
// document.querySelector(".clear-tasks").addEventListener("click", (e) => console.log("Hello"));
// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick(e) {
//   //   console.log("clicked");

//   let val;
//   val = e;

//   //   event target element
//   val = e.target;
//   val = e.target.className;
//   val = e.target.classList;
//   e.target.innerText = "Hello";

//   //   event type
//   val = e.type;
//   console.log(val);
// }

// ***MOUSE EVENTS***
// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// // click
// clearBtn.addEventListener("click", runEvent);
// // double click
// clearBtn.addEventListener("dblclick", runEvent);
// // mouse down
// clearBtn.addEventListener("mousedown", runEvent);
// // mouse up
// clearBtn.addEventListener("mouseup", runEvent);
// // mouse enter & leave
// card.addEventListener("mouseenter", runEvent);
// card.addEventListener("mouseleave", runEvent);
// // mouse over & out
// card.addEventListener("mouseover", runEvent);
// card.addEventListener("mouseout", runEvent);
// // mouse move
// card.addEventListener("mousemove", runEvent);

// // event handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `RGB(${e.offsetX},${e.offsetY},40)`;
// }

// ***input & form events***
// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h5");
// const select = document.querySelector("select");

// // Clear input
// taskInput.value = "";

// form.addEventListener('submit', runEvent);

// Keydown
//taskInput.addEventListener('keydown', runEvent);
// Keydown
// taskInput.addEventListener('keyup', runEvent);
// Keypress
// taskInput.addEventListener('keypress', runEvent);
// Focus
// taskInput.addEventListener('focus', runEvent);
// Blur
// taskInput.addEventListener('blur', runEvent);
// Cut
// taskInput.addEventListener('cut', runEvent);
// Paste
// taskInput.addEventListener('paste', runEvent);
// Input
// taskInput.addEventListener('input', runEvent);
// Change
// select.addEventListener("change", runEvent);

// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//console.log(e.target.value);

// heading.innerText = e.target.value;

// Get input value
// console.log(taskInput.value);

// e.preventDefault();
// }

// ***EVENT BUBBLING***

// document.querySelector('.card-title').addEventListener('click', function(){
//   console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//   console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//   console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//   console.log('col');
// });

// EVENT DELGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener("click", deleteItem);

function deleteItem(e) {
  // if(e.target.parentElement.className === 'delete-item secondary-content'){
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains("delete-item")) {
    console.log("delete item");
    e.target.parentElement.parentElement.remove();
  }
}
