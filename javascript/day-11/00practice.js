let btn = document.querySelector("button");
let un = document.querySelector("ul");
let inpt = document.querySelector("input");

btn.addEventListener("click" , function(){

    let ls = document.createElement("li");
    ls.innerText = inpt.value;

    // console.log("Button was clicked");
    un.appendChild(ls);
    inpt.value = "";
});