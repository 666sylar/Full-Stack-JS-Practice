/*
Створіть дві змінні a  та b, присвойте їм довільні числові значення. Виведіть у консоль результат їх множення.
*/
let a = 1;
let b = 3;
console.log(`${a} * ${b} =`, a * b);

/*
Створіть дві змінні c  та d, присвойте їм довільні числові значення. Виведіть у консоль результат ділення першого на друге.
*/
let c = 4;
let d = 2;
console.log(`${c} / ${d} =`, c / d);

/*
Створіть дві змінні e  та f, присвойте їм довільні значення. Виведіть у консоль результат їхньої суми
*/
let e = 5;
let f = 6;
console.log(`${e} + ${f} =`, e + f);

/*
Визначте змінні зі значеннями 11, true, "java script", "100"  і виведіть їх в консоль
*/
let numberValue = 11;
let booleanValue = true;
let stringValue = "java script";
let anotherStringValue = "100";
console.log(numberValue, booleanValue, stringValue, anotherStringValue);

/*
Переробіть наведений код так, щоб у ньому використовувалися операції +=, -=, *=, /=, ++, --
let num = 1;
num = num + 11;
num = num – 11;
num = num * 11;
num = num / 11;
num = num + 1;
num = num – 1;
*/
let num = 1;
console.log("num =", num);
num += 11;
console.log("num += 11 -->", num);
num -= 11;
console.log("num -= 11 -->", num);
num *= 11;
console.log("num *= 11 -->", num);
num /= 11;
console.log("num /= 11 -->", num);
num++;
console.log("num++ -->", num);
num--;
console.log("num-- -->", num);

/*
Запитати число у користувача, піднести його до квадрату і вивести результат.
*/
let number = prompt("Enter number:");
alert(`${number} ^ 2 = ${number ** 2}`); // number * number / Math.pow(number, 2)

/*
Вивести середнє арифметичне двох чисел. Числа запитувати у користувача.
*/
let number1 = Number(prompt("Enter number:"));
let number2 = Number(prompt("Enter second number:"));
alert(`(${number1} + ${number2}) / 2 = ${(number1 + number2) / 2}`);

/*
Перевести кількість хвилин на секунди та вивести результат. Число хвилин запитувати у користувача. 
*/
let minutes = prompt("Enter minutes:");
alert(`${minutes} minutes = ${minutes * 60} seconds`);

/*
Створіть змінну greeting зі значенням 'Hello,' і оголосіть змінну userName. Запитайте ім'я користувача та внесіть це значення у змінну userName. Виведіть повідомлення з привітанням, наприклад, 'Hello, Alex!' (згадайте про конкатенацію)
*/
let greeting = "Hello,";
let userName = prompt("What's your name?");
alert(greeting + " " + userName + "!");
