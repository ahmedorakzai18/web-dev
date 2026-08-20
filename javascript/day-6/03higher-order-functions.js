function multipleGreet(func , number)
{
    for(let i = 1; i <= number; i++)
    {
        func();
    }
}

greet = function()
{
    console.log("Hello, How are you?");
}

greet();

multipleGreet(greet , 3);   // this is higher order function