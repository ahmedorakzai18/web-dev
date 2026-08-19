//syntax

console.log("---------------Functions SYNTAX---------------");

function greet()
{
    console.log("Hello World");
}

greet();        // here we are calling it
console.log("");
greet();


greet();    // i can write it as many times i want.


console.log("\n\n---------------Passing Parameters---------------");
function greeet(name)   // here name is he parameter
{
    console.log("Hello, " , name)
}

greeet("Amir");     // here "amir" is the argument
greeet("Afaq");
greeet("Sami");


console.log("\n\n---------------Passing more than one Parameter---------------");

function addition(a , b)    // same goes for -, *, /, %
{
    console.log(`Addition answer of your numbers is ${a+b}`);
    // but, mostly we write:
    // return a+b;
}

addition(12,4);
// alternative: console.log(addition(12 , 4));


console.log("\n\n---------------Functions for a LOOP---------------");
function numLoop()
{
    for(let i = 1; i<=10; i++)
    {
        console.log(i);
    }
        console.log("Hey i am a Loop in a funciton");
    
        return; // this return stops the functions here, anything after this wont be printed

        console.log("GoodBye");
}
numLoop();
console.log("\n\n---------------Checking if Person is Adult or NO---------------");


function isAdult(age)
{
    if(age >= 18)
    {
        console.log(true , "Person is Adult");
    }
    else
    {
        console.log(false, "Person is Not Adult");
    }
}

isAdult(31);

console.log("\n\n---------------Checking if Number is Even or ODD---------------");
function isEven(number)
{
    if(number%2 == 0)
    {
        console.log("Number is Even");
    }
    else
    {
        console.log("Number is Odd");
    }
}

isEven(832);