// Global Scope

let name = "alan";

function greet()
{
    console.log(name);
}

greet();

console.log(name);


// Functions scope

function calculateSum(a , b)
{
    let sum = a+b;
    return sum;
}

console.log(calculateSum(23,5));
// console.log(sum);   // bcz the sum is defined inside the function, so it can't be accessed outside


// BLOCK SCOPE

if (true)
{
    let age = 20;

    console.log(`AGE IS ${age}`);   // CAN'T put this outside the curly braces. it will give Error.
}