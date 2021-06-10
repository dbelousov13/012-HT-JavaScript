"use strict";

function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}

const CarPrototype = new Car();
CarPrototype.about = function () {
  console.log(`${this.brand}, ${this.model}`);
};

Car.prototype = CarPrototype;
const car1 = new Car("Tesla", "Model S");
const car2 = new Car("Skoda", "Octavia");

car1.about();
car2.about();

function Garden(tree, fruitColor) {
  this.tree = tree;
  this.fruitColor = fruitColor;
}

const treeColorProto = new Garden();
treeColorProto.treeColor = function () {
  console.log(`The ${this.tree} is ${this.fruitColor}`);
};
Garden.prototype = treeColorProto;

const tree1 = new Garden("Груша", "зеленая");
const tree2 = new Garden("Яблоня", "красная");

tree1.treeColor();
tree2.treeColor();
