/*
1. Задача: проектуємо бібліотеку. 

Написати клас для об’єкта Книга (Book) з такими властивостями:
унікальний ідентифікатор (id)
автор
назва
рік написання
кількість сторінок
Книга може розташовуватись на полиці або бути виданою на руки користувача. Відповідно, потрібно додати дві властивості - номер полиці та id юзера. Якщо книгу хтось читає - у властивості “номер полиці” має бути null, а id юзера має відповідати тому юзеру, який її читає. Якщо ж книга вакантна і її можна арендувати (взяти почитати), то вона має ціле число у властивості “номер полиці” і null в графі id юзера.

Передбачити два методи екземпляра книги: 
метод isVacant(), який повертає true, якщо книга стоїть на полиці і її можна взяти
метод getRent(id), який приймає id юзера і “видає” книгу на руки - встановлює номер полиці в null і id юзера рівним тому, що переданий в аргументи методу

Додатково написати клас для створення об’єктів юзера. Юзер має наступні властивості:
id
ім’я
прізвище
адреса проживання
*/

class Book {
  constructor(id, author, title, year, pages, shelfNumber) {
    this._id = id;
    this._author = author;
    this._title = title;
    this._year = year;
    this._pages = pages;
    this._shelfNumber = shelfNumber;
    this._userId = null;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }

  isVacant() {
    return this._shelfNumber !== null && this._userId === null;
  }

  getRent(userId) {
    if (this.isVacant()) {
      this._shelfNumber = null;
      this._userId = userId;
      console.log(`Book "${book.title}" by ${book.author} has been rented to user with ID: ${userId}`);
    } else {
      console.log(`Book "${book.title}" by ${book.author} is already rented`);
    }
  }
}

class User {
  constructor(id, firstName, lastName, address) {
    this._id = id;
    this._firstName = firstName;
    this._lastName = lastName;
    this._address = address;
  }

  get id() {
    return this._id;
  }
}

const firstUser = new User(1, "Ivan", "Ivanov", "Kyiv, Ivanovskaya, 13, 42");
const secondUser = new User(2, "Petr", "Petrov", "Kyiv, Petrovskaya, 6, 42");

const book = new Book(1, "Douglas Adams", "The Hitchhiker's Guide to the Galaxy", 1979, 224, 42);

console.log(`Book "${book.title}" by ${book.author} is ${book.isVacant() ? "vacant" : "not vacant"}`);

book.getRent(firstUser.id);
book.getRent(secondUser.id);

console.log(`Book "${book.title}" by ${book.author} is ${book.isVacant() ? "vacant" : "not vacant"}`);

/*
2. Створити клас для опису абстрактної тварини і два класи для тварин Тигр та Вовк, які його розширюють. Батьківський клас має реалізувати методи hunting та growl (робота методів - вивести в консоль рядок типу “зараз дожену здобич” та “грррррр”), а тигр та вовк мають реалізувати однойменні методи по-своєму (наприклад, виводити “тигр з’їсть тебе”). Створити декілька екземплярів класу Тигр і Вовк і перевірити, чий метод викликається - класу-дитини або абстрактного батьківського класу
*/

class Animal {
  hunting() {
    console.log("Animal is hunting");
  }

  growl() {
    console.log("Animal growls");
  }
}

class Tiger extends Animal {
  hunting() {
    console.log("The tiger will eat you");
  }

  growl() {
    console.log("Roar!");
  }
}

class Wolf extends Animal {
  hunting() {
    console.log("A wolf stalks its prey");
  }

  growl() {
    console.log("Howl!");
  }
}

const tiger = new Tiger();
const wolf = new Wolf();

tiger.hunting();
tiger.growl();

wolf.hunting();
wolf.growl();
