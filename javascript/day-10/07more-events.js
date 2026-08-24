//===================Change Event==================
// when an element's value is modified and committed by the user

// let user = document.querySelector("#un");

// user.addEventListener("change" , function(){
//     console.log("Value is Changed");
//     console.log(`Final value is ${this.value}`)
// });


//-------------------------------------------------------------------------------------


//===================Input Event==================
//Tracks every single time the value of element changes

let user = document.querySelector("#un");

user.addEventListener("input" , function(){
    console.log("Value is Changed");
    console.log(`Final value is "${this.value}"`)
});