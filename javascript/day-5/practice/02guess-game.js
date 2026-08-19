const max = prompt("Enter the Maximum Number");

const random = Math.floor(Math.random() * max + 1);

let guess = Number(prompt("Guess the Random Number"));

while(true)
{
    if(guess == "quit")
    {
        console.log("You quit the Game");
        break;
    }

    if(guess == random)
    {
        console.log(`Congratulations!!! YOU GUESSED RIGHT the answer was ${random}`);
        break;
    }
    else if(guess < random){guess = Number(prompt("Too low. Guess higher"));}
    else if(guess > random){guess = prompt("WOIIIIII TOO high. Guess lower")}
    
}