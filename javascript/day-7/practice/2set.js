const id = setInterval(function()
{
console.log("Hello World");
}, 2000 )

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Intreval Ran Successfully");
}, 10000);