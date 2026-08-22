// spread is used to expand an array into individual elements. It is often used in function calls, array literals, and object literals.
// can be used for string, array, object, and function calls.

let arr = [1, 2, 3, 4, 5];
const x = Math.max(...arr);     

console.log(x);

// spread can be used to copy an array or object. It creates a shallow copy of the original array or object.

let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr2);


let even = [2,4,6,8,10];
let odd = [1,3,5,7,9];

const combine = [...even , ... odd];

console.log(combine);