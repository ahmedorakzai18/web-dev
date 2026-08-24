let newPara = document.createElement("p");

newPara.innerText = "Hey i am a new paragraph Created with JavaScript(using appendChild)";

// to show it in Document, you need to append it somewhere in the document

let body = document.querySelector("body");

body.appendChild(newPara);       // Now remeber it will put it at the end of the document

newPara.append(". some extra text(using only append)...");

// ==================================================================================
// ==================================================================================


let aqua = document.querySelector("#pre1");

aqua.innerText = "lkfaj dskfjaosd ifadsoif jsadfaosdif";

let pree = document.querySelector("pre");

pree.appendChild(aqua);


// ==================================================================================
// ==================================================================================

let abc = document.createElement('p'); 
abc.innerText = "I am a prepended paragraph!"; // Added text so you can see it
body.prepend(abc);