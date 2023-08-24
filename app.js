// // // // // // Global execution context
// // // // // logger();
// // // // // console.log(1);

// // // // // // const logger = () => {
// // // // // //   console.log(2);
// // // // // //   console.log(3);
// // // // // // };

// // // // // function logger() {
// // // // //   console.log(2);
// // // // //   console.log(3);
// // // // // }

// // // // function one() {
// // // //   console.log(1);
// // // // }

// // // // function two() {
// // // //   setTimeout(() => {
// // // //     console.log(2);
// // // //     three();
// // // //   }, 0);
// // // // }

// // // // function three() {
// // // //   console.log(3);
// // // // }

// // // // one();
// // // // two();

// // // // // function message() {
// // // // //     console.log("hello")
// // // // // }

// // // // // function logger(message) {
// // // // //     message()
// // // // // }

// // // // // logger(message)

// // // function callbackHell() {
// // //   setTimeout(() => {
// // //     const data = { user: 'Jams' };
// // //     setTimeout(() => {
// // //       console.log('Data has been Updated');
// // //     }, 1000);
// // //     console.log('we got some data');
// // //   }, 500);
// // // }

// // // callbackHell();

// // const promise = new Promise((resolve, reject) => {
// //   resolve('we did it baby');
// //   //   reject('awe shit fucking server is down');
// // });

// // promise
// //   .then((data) => {
// //     const user = data;
// //     return fetch('https://jsonplaceholder.typicode.com/todos/1');
// //   })
// //   .then((todos) => {
// //     console.log(todos);
// //   })
// //   .catch((e) => {
// //     console.error(e);
// //   });

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('this is my data from a server "by God!"'), 2000);
// });

// promise.then((res) => {
//   console.log(res);
// });

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((res) => res.json())
//   .then((res) => console.log(res))
//   .catch((e) => console.log(e))
//   .finally(e => console.log('F*** you function complete'));

const todo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await response.json();
  console.log(1);
  console.log(data);
  console.log(2);
}

todo()
