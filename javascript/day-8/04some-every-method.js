let arr = [11, 21, 31, 41, 51, 61, 71];

let pring = arr.some((ele) => {
  // it show true/false even if a single element is true
  return ele >= 53;
});

console.log(pring);

let array = [10, 20, 30, 94, 85];

let print = array.every((elem) => {
  // it show's true/flase when every element there is true.
  return elem >= 1;
});

console.log(print);
