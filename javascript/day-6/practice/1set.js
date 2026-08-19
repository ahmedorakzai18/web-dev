// Create a function that prints a poem

console.log("---------------POEM---------------");
function poem()
{
    console.log("\nI met a traveller from an antique land Who said");
    console.log("Two vast and trunkless legs of stone");
}

poem();

// Create a Function to roll a dice & always display the value of the dice (1 to 6).


console.log("---------------Dice-Roll---------------");
function diceRoll()
{
let dice = Math.floor(Math.random()*6 +1);

console.log(dice);
}

diceRoll();