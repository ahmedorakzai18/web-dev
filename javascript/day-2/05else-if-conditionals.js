let marks = 132; 

if(marks >=90 && marks < 100)
{
    console.log(`Marks is ${marks} \nand Grade Point Average is 4.0`)
}

else if(marks>=78 && marks <= 89)
{
    console.log(`Marks is ${marks} \nand Grade Point Average is 3.5`)
}

else if(marks>=70 && marks <= 77)
{
    console.log(`Marks is ${marks} \nand Grade Point Average is 3.0`)
}

else if(marks>=60 && marks <= 69)
{
    console.log(`Marks is ${marks} \nand Grade Point Average is 2.5`)
}

else if (marks >= 0 && marks < 60) 
{
    console.log(`Marks is ${marks} \nand Grade Point Average is 0.0`)
}

else
{
    console.log("Invalid Number");
}