"use strict";

// fetch("./../dbUser.json")
//   .then((response) => response.json())
//   .then((data) => console.log("data :>> ", data))
//   .catch((e) => console.error(e));

// ПРомисифицировать SetTimeout()
// // setTimeout(callback, 1000);
// delay(5000).then(() => {
//   console.log("Hi after 1 second");
// });

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// const promData = Math.random();
// console.log("promData(1) :>> ",promData);
// promiseRandom
//     .then(promData <= 0.5=> {
//         console.log("Success")
//     });
//     .catch (err => {console.error(promData);})

const rand = Math.random();
console.log(rand);

const promiseRand = new Promise((resolve, reject) => {
  if (rand <= 0.5) {
    resolve("Success");
  } else {
    reject(new Error("Wrong"));
  }
});

promiseRand
  .then((string) => {
    console.log(string);
  })
  .catch((err) => {
    console.log(err);
  });
