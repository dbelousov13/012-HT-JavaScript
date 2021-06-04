// Реализовать иерархию:
// ПассажирскийТранспорт=>ТранспортноеСредство (3-4 свойства, 1-2 метода)
// ГрузовойТранспорт=>ТранспортноеСредство.

// Для базового класса Vehicle реализовать:
// - свойства:
// + --- dimensions - габариты (объект с длиной, шириной, высотой),
// + --- brand - марка,
// + --- model - модель,
// --- manufactureDate - дата производства (использовать встроенный объект Date).
// - методы:
// --- getMaxSize() - возвращает максимальный габаритный размер,
// --- getAge() - возвращает количество лет со дня производства.
// Дочерний класс PassengerTransport расширяется:
// - свойствами:
// --- passengerLimit - максимальное количество пассажирских мест,
// --- passengerCount - количество занятых пассажирских мест,
// - методом addPassenger() для добавления еще одного пассажира с проверкой возможности добавления (есть ли еще незанятые места) - возвращает истину (если пассажир добавлен) или ложь (если не добавлен).

class Vechicle {
  constructor(length, width, height, brand, model, manufactureDate) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.brand = brand;
    this.model = model;
    this.manufactureDate = manufactureDate;
  }
  getMaxSize() {
    const size = Math.max(this.length, this.width, this.height);
    console.log(`This car max size is ${size} m.`);
    return size;
  }

  getAge() {
    const age = new Date().getFullYear() - this.manufactureDate;
    console.log(`This car age is ${age} years`);
    return age;
  }

  set length(lengthSize) {
    if (typeof lengthSize !== "number" || lengthSize < 1) {
      throw new Error("Incorrect length");
    }
    this._length = lengthSize;
  }
  get length() {
    return this._length;
  }
  set width(widthSize) {
    if (typeof widthSize !== "number" || widthSize < 1) {
      throw new Error("Incorrect width");
    }
    this._width = widthSize;
  }
  get width() {
    return this._width;
  }
  set height(heightSize) {
    if (typeof heightSize !== "number" || heightSize < 1) {
      throw new Error("Incorrect width");
    }
    this._height = heightSize;
  }
  get height() {
    return this._height;
  }

  set manufactureDate(year) {
    if (
      typeof year !== "number" ||
      year <= 1930 ||
      year >= new Date().getFullYear()
    ) {
      throw new Error("Incorrect Manufacture year");
    }
    this._manufactureDate = year;
  }
  get manufactureDate() {
    return this._manufactureDate;
  }
}

const car1 = new Vechicle(20, 15, 5, "Tesla", "Model S", 2019);
car1.getAge();
car1.getMaxSize();

class PassengerTransport extends Vechicle {
  constructor(
    length,
    width,
    height,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(length, width, height, brand, model, manufactureDate);
    this._passengerLimit = passengerLimit;
    this._passengerCount = passengerCount;
  }
  addPassenger() {
    const addPass = 1;
    let newPassCount;
    if (this._passengerLimit < this._passengerCount) {
      return console.log(`${false} no free seats`);
    }
    if (this._passengerCount + addPass > this._passengerLimit) {
      return console.log(`cannot add passenger`);
    } else newPassCount = this._passengerCount + addPass;
    console.log(newPassCount);
    return (this._passengerCount = newPassCount);
  }
}

const passTran1 = new PassengerTransport(
  15,
  25,
  4,
  "Bogdan",
  "A71",
  2019,
  40,
  35
);

console.log(passTran1);
passTran1.addPassenger();
console.log(passTran1);

// Дочерний класс FreightTransport расширяется:
// - свойством:
// --- capacity - грузоподъемность,
// - методом checkLoadingPossibility(weight) - для проверки возможности погрузки массы weight. Возвращает булеан.

// Создать объекты всех классов иерархии, протестировать работу методов.
debugger;
class FreightTransport extends Vechicle {
  constructor(length, width, height, brand, model, manufactureDate, capacity) {
    super(length, width, height, brand, model, manufactureDate);
    this._capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    const load = this._capacity >= weight;
    console.log(load);
    return load;
  }
}

const transp = new FreightTransport(52, 36, 65, "mod", "bran", 1956, 31);

console.log(transp);

transp.getAge();

transp.checkLoadingPossibility(35);
