let add = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");


add.addEventListener("click" , function(){
    
    let lists = document.createElement("li");
    lists.innerText = input.value;

    ul.appendChild(lists);

    // console.log(input.value);
    input.value = "";



});