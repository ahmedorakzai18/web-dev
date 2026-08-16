let Colors = ["Yellow", "Blue", "Black", "Red" , 234];

console.log(Colors); 
console.log("At number 3 index is stored:" , Colors[3]); 

let numbers = [23,52,12,63,7,373,24,80,1.432,6.33,17.3];

console.log(numbers); 
console.log("At number 6 index is stored:" , numbers[9]); 

let decimalnumbers = [1.43,46.52,1.432,6.33,17.3,8.01];

console.log(decimalnumbers); 
console.log("At number 1 index is stored:" , decimalnumbers[1]); 

console.log(numbers.length);
console.log(typeof(length));



let Car = ["BMW" , "Ford" , "Mercedes" , "Volvo" , "Toyoto"]; 
Car.push("Honda");      // This adds at the end

console.log(Car);


Car = ["BMW" , "Ford" , "Mercedes" , "Volvo" , "Toyoto"]; 
Car.pop();      // This Deletes from the end
Car.pop();

console.log(Car);


let Car2 = ["BMV" , "Fordd" , "Mercedes" , "Volvo" , "Toyoto"]; 
Car2.unshift("Mclearn", "Ferrari" , "Rolls");      // This adds at the start
Car2.shift();      // This deletes from the start

console.log(Car2);


console.log(Car2.indexOf("Mercedes"));      // Gives which index "Mercedes" is at, if "Mercedes" is not there, it gives -1.

console.log(Car2.includes("Fordd"));        // Searches the Arrays and tells either true or false if there or not.



let prime = ["apple" , "banana" , "Cheri"]; 
let secondary = ["ant" , "bull" , "Cat"]; 

console.log(prime.concat(secondary)); // It adds the two arrays

console.log(prime.reverse());       // It reverse the Elements.