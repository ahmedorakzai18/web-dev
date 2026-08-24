let body = document.querySelector("body");


// =========================================

let addp = document.createElement("p");

addp.innerText = "Hey i am red";
addp.style.color = "red";

body.prepend(addp);

// =========================================

let addh3 = document.createElement("h3");

addh3.innerText = "i'm a blue h3";

addh3.style.color = "blue";

body.prepend(addh3);

// =========================================

let adddiv = document.createElement("div");

let addh1 = document.createElement("h1");
let addpara = document.createElement("p");

addh1.innerText = "i'm in div";
addpara.innerText = "Me too";

adddiv.prepend(addh1);
adddiv.prepend(addpara);


adddiv.style.border = "2px solid black";
adddiv.style.backgroundColor = "pink";

body.prepend(adddiv);