let a = 382; 

let b = 231; 

let c = `Value of a is ${a} \nValue of b is ${b}`;
console.log(c);

if(a>=b)
{
    console.log("a is Greater than b.");
}
else if(a<=b)
{
    console.log("b is Greater than a.")
}
else
{
    console.log("Both are equal.")
}

let x = 28;

console.log("\n\nage is", x);

if (x < 0)
{
    console.log("Invalid Number");
}
else if (x >= 18)
{
    console.log("Is eligible to vote.");
}
else
{
    console.log("Is NOT eligible to vote.");
}