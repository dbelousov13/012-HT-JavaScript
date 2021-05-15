// 3 Создать функции-конструкторы:
// - Книга (автор, название, год издания, издательство)
// - Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)

function Book(author, bookName, year, publisher) {
  this.author = author;
  this.bookName = bookName;
  this.year = year;
  this.publisher = publisher;
}

const book01 = new Book(
  "A.Pushkin",
  "Ruslan i Liudmyla",
  "1984",
  "Pushkin Publisher"
);

const book02 = new Book("T.Schevchenko", "Заповіт", "2020", "Видавництво Лева");
console.log("Book 1 ", book01);
console.log("Book 2 ", book02);

function EBook(author, bookName, year, publisher, format, eNumber) {
  this.author = author;
  this.bookName = bookName;
  this.year = year;
  this.publisher = publisher;
  this.format = format;
  this.eNumber = eNumber;
}

const ebook01 = new EBook(
  "В.Зеланд",
  "Трансерфинг реальности",
  "2002",
  "Kyiv-publish",
  "ePub",
  32
);

const ebook02 = new EBook(
  "В.Зеланд",
  "Трансерфинг реальности",
  "2002",
  "Kyiv-publish",
  "PDF",
  33
);

const ebook03 = new EBook(
  "В.Зеланд",
  "Трансерфинг реальности",
  "2002",
  "Kyiv-publish",
  "MS Word",
  34
);

console.log("E-Book 1 ", ebook01);
console.log("E-Book 2 ", ebook02);
console.log("E-Book 3 ", ebook03);
