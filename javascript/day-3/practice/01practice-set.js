// Question: 

// start form is:       start = ["january" , "july" , "March"  ,  "August"]; 
// end from is:         final =["july" , "june" , "March" , "August"];


let start =  ["january" , "July" , "March"  ,  "August"]; 

console.log(start);

start.shift();
start.shift();

console.log(start);

start.unshift("june");
start.unshift("july");

console.log(start);