"use strict";
function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Userurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

// console.log(users.toString()); // вывел объекты. с разными типами данных не работает корректно
// Get woman users

// const womanUsers = users.filter(function (isWoman) {
//   return !users.isMale;
// });

// console.table(womanUsers);

// console.table(`${users.filter((isMale) => !isMale)}`);

// const womanUsers1 = users.filter(isWoman);
// function isWoman(user) {
//   return user.isMale;
// }
// console.table(womanUsers1);

// 1.1 Для примера с последней части занятия (https://github.com/pecourses/js-intro/blob/main/js/users.js) прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип.

// 1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).
const schoolWoman = users.filter(school);
function school(user) {
  return !user.isMale && user.age >= 6 && user.age <= 18;
}
console.table(schoolWoman);

const schoolGirls = users.map(girls);
function girls(user) {
  if (!user.isMale && user.age >= 6 && user.age <= 18) {
    return user.email;
  }
}
console.table(schoolGirls);
// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом useremail99@gmail.com
// 1.4 Проверить, все ли пользователи подписаны (subscribed).
