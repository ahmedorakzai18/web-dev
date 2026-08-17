//QUESTION: 1

let arr1 = [7,9,0,-2] ;

let n1 = 3; 

console.log(arr1.slice(0,n1));

//QUESTION: 2

let arr2 = [7, 9, 0,-2]; 

let n2 = 3;

console.log(arr2.slice(arr2.length-n2));


// QUESTION: 3

let str = ""; 

if(str.length == 0)
{
    console.log("EMPTY");
}
else
{
    console.log("Not EMPTY");
}


// QUESTION: 4

let ss = prompt("Enter something : "); 
console.log(`original value of string is ${ss}`); 
console.log(`changed value of string is ${ss.trim()}`);
