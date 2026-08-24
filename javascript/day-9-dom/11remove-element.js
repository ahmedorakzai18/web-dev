let removing = document.createElement("p");

removing.innerText = "hey i am a pargraph created by js.";

let body = document.querySelector("body");

document.body.append(removing);

console.log(removing);

body.removeChild(removing);