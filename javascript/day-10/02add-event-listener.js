let body = document.querySelector("body");


let heading2 = document.querySelector("#heading2");
let button = document.querySelector("#b1");

button.addEventListener("mouseover" , function(){
     if (heading2.innerText === "Changed Through js") {
        heading2.innerText = "I am a Heading again";
    } else {
        // Otherwise, change it to the new text
        heading2.innerText = "Changed Through js";
    }
});