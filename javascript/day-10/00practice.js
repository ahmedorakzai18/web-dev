let body = document.querySelector("body");

let para1 = document.querySelector("#p1");
let button = document.querySelector("#b1");

button.addEventListener("click", function () {
  para1.innerText = "CHANGED";
});
