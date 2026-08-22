let arr = [1,2,3,4,5,6,7,8,9];

let print = arr.reduce((result , ele) => {
    // console.log(result)
    // Used to add the array element here.
    return result + ele ;
});

console.log(print);

// let abc = [32,42,513,23,63];

// let pr = abc.reduce((ecum , num) =>{
//     if(num > ecum)
//     {
//         return num;
//     }
//     else{
//         return ecum;
//     }
// });

// console.log(pr);