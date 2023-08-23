// // // Global execution context
// // logger();
// // console.log(1);

// // // const logger = () => {
// // //   console.log(2);
// // //   console.log(3);
// // // };

// // function logger() {
// //   console.log(2);
// //   console.log(3);
// // }

// function one() {
//   console.log(1);
// }

// function two() {
//   setTimeout(() => {
//     console.log(2);
//     three();
//   }, 0);
// }

// function three() {
//   console.log(3);
// }

// one();
// two();

// // function message() {
// //     console.log("hello")
// // }

// // function logger(message) {
// //     message()
// // }

// // logger(message)

function callbackHell() {
  setTimeout(() => {
    const data = { user: 'Jams' };
    setTimeout(() => {
      console.log('Data has been Updated');
    }, 1000);
    console.log('we got some data');
  }, 500);
}

callbackHell();