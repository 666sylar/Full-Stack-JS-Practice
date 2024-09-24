/*
1. Створити об’єкт user з наступними властивостями:
ім'я, 
прізвище, 
електронна адреса, 
password,
номер телефона,
адреса (є рядком або *об'єктом з властивостями місто, вулиця, дім, квартира);
*/
const user = {
  firstName: "Ivan",
  lastName: "Ivanov",
  email: "ivan.ivanov@pm.me",
  password: "qwerty",
  phone: "+380501234567",
  address: {
    city: "Kyiv",
    street: "Ivanovskaya",
    house: 13,
    apartment: 42,
  },
};

/* 
2. Написати функцію, яка приймає об’єкт юзера і виводить вітання типу “Доброго дня, (ім’я_юзера) (прізвище юзера)”
*/
function greetUser(user) {
  console.log(`Good afternoon, ${user.firstName} ${user.lastName}`);
}

greetUser(user);

/*
3. Написати функцію, яка приймає об’єкт і виводить в консоль всі його властивості (за допомогою циклу for..in)
*/
function displayProperties(obj) {
  for (key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      console.log(`${key}:`);
      displayProperties(obj[key]);
    } else {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

displayProperties(user);

/*
4. Створити об’єкт car (машина) з властивостями:
колір
модель
марка
об’єм двигуна
місткість (можлива кількість пасажирів)
поточна швидкість (speed)
максимальна можлива швидкість (maxSpeed)
та методами:
accelerate (збільшення швидкості): метод приймає кількість кілометрів/годину (ціле число) та додає до поточної швидкості (speed), але результат не має перевищувати максимально можливої швидкості для цієї машини
deaccelerate (зменшення швидкості): метод приймає ціле число (кількість кілометрів на годину) і зменшує поточну швидкість (speed) на вказану, але результат не може бути від’ємним
stop (зупинка) - метод нічого не приймає, при виклику встановлює поточну швидкість (speed) рівною 0
*/
const car = {
  color: "red",
  model: "Model S",
  make: "Tesla",
  engineVolume: 3.0,
  capacity: 5,
  speed: 0,
  maxSpeed: 250,

  accelerate(kmh) {
    this.speed += kmh;
    if (this.speed > this.maxSpeed) {
      this.speed = this.maxSpeed;
    }
    console.log(`Current speed: ${this.speed} km/h`);
  },

  deaccelerate(kmh) {
    this.speed -= kmh;
    if (this.speed < 0) {
      this.speed = 0;
    }
    console.log(`Current speed: ${this.speed} km/h`);
  },

  stop() {
    this.speed = 0;
    console.log("The car has stopped.");
  },
};

car.accelerate(100);
car.accelerate(200);
car.deaccelerate(50);
car.stop();

/*
5. На основі об’єкта з завдання №4 розробити функцію-конструктор для масового створення таких об’єктів за переданими параметрами. В якості перевірки створити декілька екземплярів таких об’єктів з різними властивостями
*/
function Car(color, model, make, engineVolume, capacity, maxSpeed) {
  this.color = color;
  this.model = model;
  this.make = make;
  this.engineVolume = engineVolume;
  this.capacity = capacity;
  this.speed = 0;
  this.maxSpeed = maxSpeed;
}

Car.prototype.accelerate = function (kmh) {
  this.speed += kmh;
  if (this.speed > this.maxSpeed) {
    this.speed = this.maxSpeed;
  }
  console.log(`Current speed: ${this.speed} km/h`);
};

Car.prototype.deaccelerate = function (kmh) {
  this.speed -= kmh;
  if (this.speed < 0) {
    this.speed = 0;
  }
  console.log(`Current speed: ${this.speed} km/h`);
};

Car.prototype.stop = function () {
  this.speed = 0;
  console.log("The car has stopped.");
};

const car1 = new Car("green", "Model 3", "Tesla", 2.5, 5, 240);
const car2 = new Car("blue", "Model X", "Tesla", 1.8, 5, 220);

car1.accelerate(100);
car1.accelerate(200);
car1.deaccelerate(50);
car1.stop();

car2.accelerate(100);
car2.accelerate(200);
car2.deaccelerate(50);
car2.stop();
