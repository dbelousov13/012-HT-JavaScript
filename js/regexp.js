"use strict";

const str = "Vasilii";
const regexp1 = /^[A-Z][a-z]{0,19}$/;
console.log("regexp1.test(str) :>> ", regexp1.test(str));

const password = "ohUI897hk_";
const password1 = "$%hnpIwfwfw";
const rePassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)\w{8,16}$/;

const text = "Мама мыла раму 333 часа 333 минуты";
console.log("text.match(/d{3}/) :>> ", text.match(/[1-9]\d{2}/g));

const index = text.search(/[1-9]\d{2}/);
console.log(index);

//split

const text3 = "Мама мыла   раму  333 часа     111 минут";
const textArr3 = text3.split(/\s+/);

console.log("textArr3 :>> ", textArr3);
const text4 = textArr3.join(" ");
console.log("text4 :>> ", text4);
