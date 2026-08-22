//Check if all numbers in our array are multiples of 10 or not.

let arr = [120,420,530,120,4410,9832];

let print = arr.every((ele) =>
{
    return ele%10 == 0;    
});

console.log(print);

// Code: 2
// Create a function to find the min number in an array.

let array = [23,2,37,26,4,34,5324,532,45,3246,632,453,3];

let p = array.reduce((min , e) =>{
    if(min<e)
    {
        return min;
    }
    else
    {
        return e;
    };
});

console.log(p);