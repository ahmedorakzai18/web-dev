// start form : start = ['january' , 'july' , 'march' , 'august']; 
// end form : end = ['july' , 'june' , 'march' , 'august'];         USING SPLICE

const start = ["january" , "july" , "march" , "august"]; 

start.splice(0,1);

console.log(start);

start.splice(1, 0, "june");

console.log(start);


// Code: 2: Reverse the Array

const languages = ["c" , "C++" , "python" , "java" , "c#" , "sql" , "html" , "javascript"];

languages.reverse() ;

console.log(languages); 