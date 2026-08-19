// Create a function that prints a poem

console.log("---------------POEM---------------");
function poem()
{
    console.log("\nI met a traveller from an antique land Who said");
    console.log("Two vast and trunkless legs of stone");
}

poem();

// Create a Function to roll a dice & always display the value of the dice (1 to 6).


console.log("\n\n---------------Dice-Roll---------------");
function diceRoll()
{
let dice = Math.floor(Math.random()*6 +1);

console.log(dice);
}

diceRoll();


// Create a Function that gives us the average of 3 numbers.
console.log("\n\n---------------Average of 3 Numbers---------------");

function average(a , b , c)
{
    return (a+b+c)/3;
}

console.log(average(2,3,4));


// Create a Function that prints the multiplication table of a number.

function multiply(no)
{
    for(let i = 1; i<=10; i++)
        {
            console.log(`${no} X ${i} = ${no*i}`);
        }    
}

multiply(4);


// Create a Function that returns the sum of numbers from 1 to n.

console.log("\n\n---------------SUM of 'n' Numbers---------------");

function sumAll(n)
{
    let sum = 0;

    for(let i = 1; i<=n; i++)
    {
        sum+=i;
    }
    return sum;
}

console.log(sumAll(5));


// Create a Function that returns the concatenation of all strings in an array.

console.log("\n\n---------------Concatenation of all Strings---------------");

let str = ["Hello" , " World" , " and" , " all"];

function concat(str)
{
    let combine = "";
    for(let i = 0; i < str.length; i++)
    {
        combine += str[i];
    }
    return combine;
}

console.log(concat(str)); 
