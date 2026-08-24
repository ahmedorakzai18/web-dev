//-------------------SELECTING BODY=====================

let body = document.querySelector("body");

//=====================GIVING EVENT TO BUTTON: 1=====================

let button = document.querySelector("#c1");

button.addEventListener("click" , function(){
    console.log("I was clicked to add the styling to the Document.");

    body.style.backgroundColor = "pink";
    body.style.border = "2px solid black";
    body.style.fontFamily = "Arial";
});

//=====================GIVING EVENT TO BUTTON: 2=====================

let button3 = document.querySelector("#c3");

button3.addEventListener("click" , function(){
    console.log("I was clicked to REMOVE the styling to the Document.");
    
    body.style.backgroundColor = "#00113a";
    body.style.color = "#f8f2bf"
    body.style.fontFamily = "Georgia";
    body.style.border = "2px solid black";


});

//=====================GIVING EVENT TO BUTTON: 3=====================
let button2 = document.querySelector("#c2");

button2.addEventListener("dblclick" , function(){
       console.log("I was clicked to REMOVE the styling to the Document.");

    body.style.backgroundColor = "";
    body.style.color = "";
    body.style.fontFamily = "";
    body.style.border = "";

});