let a = ["Chair" , "Table" , "Fan" , "Pillow" , "Bed" , "Dustbin" , "Light"]; 

a.sort(); 

console.log("Here you would be able to see all the element's are sorted in alphabatically order\n\n", a , "\n\nIf you want to see the Number's in either ascending or Decending order it's kinda diffrent\n\n");

let num = [243,342,63,24,56,2,45,433,753,57,657,45,478642242,23,190,0]; 

num.sort((a,b) => a-b); //Ascending Order(Small to Big)
console.log(num);   


num.sort((a,b) => b-a); //Descending Order(Big to Small)
console.log(num);  