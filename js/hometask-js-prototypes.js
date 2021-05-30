"use strict";

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const userProto = new User();
userProto.getFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};

User.prototype = userProto;

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

// // Получить только женщин
// const womanUsers = users.filter(isWoman);

// function isWoman(user) {
//   return !user.isMale;
// }
// console.log(`Получить только женщин`);
// console.table(womanUsers);

// // Получить совершеннолетних неподписанных мужчин
// const adultUnsubMen = users.filter(isAdultUnsubMan);

// function isAdultUnsubMan(user) {
//   return user.isMale && user.age >= 18 && !user.isSubscribed;
// }

// console.table(adultUnsubMen);

// // Получить массив имейлов пользователей
// const userEmails = users.map(getEmail);

// function getEmail(user) {
//   return user.email;
// }

// console.table(userEmails);

// // Получить массив имейлов только женщин
// const womanEmails = users.filter(isWoman).map(getEmail);
// console.table(womanEmails);

// 1.1 Для примера с последней части занятия (https://github.com/pecourses/js-intro/blob/main/js/users.js) прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип.
// метод -  строка 12
console.log(
  "1.1 Для примера с последней части занятия (https://github.com/pecourses/js-intro/blob/main/js/users.js) прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип."
);
users.forEach((user) => user.getFullName());

//     1.2 Получить массив полных имен лиц женского пола школьного возраста(6 - 18 лет).
const schoolWoman = users.filter(school);
function school(user) {
  return !user.isMale && user.age >= 6 && user.age <= 18;
}
console.log(
  `1.2 Получить массив полных имен лиц женского пола школьного возраста(6 - 18 лет).`
);
console.table(schoolWoman);
schoolWoman.forEach((user) => user.getFullName());

// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com
const includesEmail = users.some(mails);
function mails(user) {
  return user.email === "useremail99@gmail.com";
}
console.log(
  `1.3. Проверить, есть ли среди пользователей пользователь с email'ом useremail99@gmail.com:`
);
console.log(`${includesEmail}`);

// 1.4 Проверить, все ли пользователи подписаны (subscribed).

const isAllSubscribed = users.every(subscribed);
function subscribed(user) {
  return user.isSubscribed;
}

console.log(`1.4. Проверить, все ли пользователи подписаны (subscribed):`);
console.log(`${isAllSubscribed}`);
