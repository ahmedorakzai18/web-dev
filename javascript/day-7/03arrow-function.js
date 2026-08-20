let add = (a , b) =>    //  Alternative: let add = (a,b) => a+b;
{
    return a+b;
};

console.log(add(32,8)); 

let greet = () =>
{
    console.log("Hello world");
}

greet();

// Implicit Return

const modu = (x , y) => x*y;

console.log(modu(2,3));