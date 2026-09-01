function hello() {
  console.log("i am hello");
  console.log("hello Function Completed");
}

function greet() {
  console.log("Hey i am Greeting Funciton");
  hello();
  console.log("Function Completed");
}
greet();
//============================================

function one() {
  return 1;
}

function two() {
  return one() + one();
}

function three() {
  let ans = two() + one();
  console.log(ans);
}

three();
