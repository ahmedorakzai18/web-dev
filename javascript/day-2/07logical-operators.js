let age = 20;
let marks = 715;
let hasID = true;
let hasAdmission = false;

if (age >= 18 && hasID)
{
    console.log("You are eligible.");
}

if (marks >= 80 || hasAdmission)
{
    console.log("You can get admission.");
}



if (age >= 18 && marks >= 70 && hasID)
{
    console.log("You meet all requirements.");
}