//======================SELECTION=====================
let button = document.querySelector("button");
let heading = document.querySelector("h1");
let para = document.querySelector("p");

//===================fUNCTION=====================

function cc(){
    console.log(this);
    this.style.backgroundColor = "#00113a";
    this.style.color = "#f8f2bf";
};


//===================ADD Event=====================

button.addEventListener("click" , cc);
heading.addEventListener("click" , cc);
para.addEventListener("click" , cc);