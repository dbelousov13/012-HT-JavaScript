class Fuel {
  constructor(weight) {
    this.weight = weight;
  }
}

// написать сеттер/геттер для года выпуска
class Car {
  constructor(brand1, model, year, weight, fuel1) {
    this.brand = brand1;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.fuel = fuel1;
  }
  getFullInfo() {
    return `${this.brand} ${this.model} ${this.year}`;
  }
  getFullWeigth() {
    // расчитать вес машины с топливом
    return this.weight + this.fuel.weight;
  }

  get fullWeight() {
    return this.weight + this.fuel.weight;
  }
  set year(manufacturedYear) {
    if (
      typeof manufacturedYear !== "number" ||
      !Number.isSafeInteger(manufacturedYear)
    ) {
      throw new TypeError("Year must be an integer number");
    }
    const currYear = new Date();
    if (manufacturedYear < 1886 || manufacturedYear > currYear.getFullYear()) {
      throw new RangeError("Incorrect manufactured year");
    }
    this._year = manufacturedYear;
  }

  get year() {
    return this._year;
  }
  static isCar(obj) {
    return obj instanceof Car;
  }
}

const car1 = new Car("Mercedes", "C200", 2015, 2000, new Fuel(45)); // {weight: 45}
car1.year = 2000;
console.log("car1.year :>> ", car1.year);
// console.log('Full info :» ', car1.getFullInfo());
console.log("Full car weight: ", car1.getFullWeigth());
console.log("Full car weight:", car1.fullWeight);
const 
console.log(Car.isCar(car1));
