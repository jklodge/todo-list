import closeFunction from "./modules/CloseListItem.js";
import addCheckedClass from "./modules/AddCheckedClass.js";
import newTodo from "./modules/NewTodo.js";
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("LI");
let i;
for (i = 0; i < myNodelist.length; i++) {
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = closeFunction;
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector("ul");
list.addEventListener("click", (event) => addCheckedClass(event));

//attach newTodo function to window to make it global
window.newTodo = newTodo;

// Or if you didn't make the newElement function a new module it would look like the below
// window.newElement = function newElement() {
//   const li = document.createElement("li");
//   const inputValue = document.getElementById("myInput").value;
//   const t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   const span = document.createElement("SPAN");
//   const txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (let i = 0; i < close.length; i++) {
//     close[i].onclick = closeFunction;
//   }
// }
