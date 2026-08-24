let form = document.querySelector("form");

form.addEventListener("submit" , function(){
    event.preventDefault();

    let inp = document.querySelector("#un");
    let ps = document.querySelector("#ps");


    console.dir(inp);
    console.dir(ps);

});