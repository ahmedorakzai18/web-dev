let heading = document.querySelector("h3");
let inp = document.querySelector("input");



inp.addEventListener("keyup" , function(event){
    console.log("Key Was Pressed");
    console.log("key= " , event.key);
    console.log("code= " , event.code);
});


// heading.addEventListener("keyup" , function(){
//     console.log("the Upper Key Was Pressed");
// });

