const favMovie = "LOTR";

guess = prompt("Enter My fav Movie");

while((guess != favMovie) && (guess != "quit"))
{
    guess = prompt("try again, u r wrong")
}

if(guess == favMovie)
{
    console.log("Congratss");
}
else
{
    console.log("you suck");
}