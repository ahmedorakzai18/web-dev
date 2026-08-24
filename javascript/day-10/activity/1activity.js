//=====================SELECTION=====================

let button = document.querySelector("button");

let heading = document.querySelector("#hh");

let rc = newColor();

heading.innerText = rc;

let div = document.querySelector("div");

//=====================FUNCTION=====================
function newColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  let coolor = `rgb(${red}, ${green}, ${blue})`;

  return coolor;
}

//=================ADD EVENT LISTENER==================

button.addEventListener("click", function () {
  console.log("A Random Color is Generated");

  heading.style.color = newColor();
  div.style.backgroundColor = newColor();
});
