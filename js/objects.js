const sparrow = {
  name: "Jack",
  age: 2,
  fly() {
    console.log(this.name, "can fly!!)))");
  },
  rename(newName) {
    this.name = newName;
  },
};

sparrow.fly();
sparrow.rename("Jack 2");

console.log(sparrow);

const sparrowChild = {
  name: "JJ",
  age: 1,
};
sparrowChild.mother = "Sparrow mother";

console.log("sparrowChild.mother :>> ", sparrowChild.mother);

sparrowChild.fly = sparrow.fly;

sparrowChild.fly();

function Monkey(name1, age) {
  this.name = name1;
  this.age = age;
}

const monkey1 = new Monkey("King Kong", 2);
const monkey2 = new Monkey("King Kong J", 4);

console.log("monkey1 :>> ", monkey1);
console.log("monkey2 :>> ", monkey2);

// function Monkey(name1, age) {
//   this.name = name1;
//   this.age = age;
// }

// const monkey1 = new Monkey("King Kong", 2);
// const monkey2 = new Monkey("King Kong J", 4);
// console.log("monkey1 :>> ", monkey1);
