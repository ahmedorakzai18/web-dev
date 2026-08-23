let lists = document.querySelector("h1");

console.log(lists.classList);

lists.classList.add("yyy"); // here we are adding a class to the h1 tag

console.log(lists.classList);

//=======================================

let paralist = document.querySelector("p");

console.log(paralist.classList);    

paralist.classList.add("mar");  // here we are adding a class to the p tag

console.log(paralist.classList);

// ========================================

lists.classList.remove("xxx");
console.log(lists.classList);       // here we are removing a class from the h1 tag

// ========================================


// here we are checking if the h1 tag contains a class or not
console.log(lists.classList.contains("yyy"));
// it will return true if the class is present otherwise false

// ========================================