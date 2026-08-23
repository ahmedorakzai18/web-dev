let query_id = document.querySelector("#p2");

console.log(query_id);

query_id.innerText = "I am the Second Paragraph"; 

// -------------------------------------------------------
let query_class = document.querySelector(".pc3");

query_class.innerText = "I am Changed as Third Paragraph";

console.log(query_class);

// -------------------------------------------------------

let query_tag = document.querySelectorAll("p")[3];

query_tag.innerText = "4th";

console.log(query_tag);