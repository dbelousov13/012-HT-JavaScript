"use strict";
// // first part
// const [btn, btn2] = document.querySelectorAll("button");

// let timeoutId;

// btn.addEventListener("click", (e) => {
//   console.log("Alert before timeout");
//   timeoutId = setTimeout(() => {
//     console.log("Alert after timeout");
//   }, 10000);
// });

// btn2.addEventListener("click", (e) => {
//   clearTimeout(timeoutId);
// });

// let count = 0;
// const intervalId = setInterval(() => {
//   console.log(count++), 1000;
// });

// second part Timer

const timerDiv = document.getElementById("timer");
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll("button");

const DELAY = 10;
let intervalId = null;
let time = new Date();
time.setMinutes(0, 0, 0);

startBtn.addEventListener("click", () => {
  if (intervalId) return;
  intervalId = setInterval(addTime, DELAY);
});

stopBtn.addEventListener("click", () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});

resetBtn.addEventListener("click", () => {
  time.setMinutes(0, 0, 0);
  updateTime();
});

function addTime() {
  time.setMilliseconds(time.getMilliseconds() + DELAY);
  updateTime();
}

function updateTime() {
  timerDiv.textContent = `${timeFormat2(time.getMinutes())}:${timeFormat2(
    time.getSeconds()
  )}.${timeFormat3(time.getMilliseconds())}`;
}

function timeFormat2(value) {
  return value > 9 ? value : `0${value}`;
}

function timeFormat3(value) {
  return value > 99 ? value : `0${value}`;
}
