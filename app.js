// Global execution context
logger();
console.log(1);

// const logger = () => {
//   console.log(2);
//   console.log(3);
// };

function logger() {
  console.log(2);
  console.log(3);
}

function one() {
  console.log(1);
}

function two() {
  console.log(2);
}

function three() {
  console.log(3);
}

one();
two();
three();
