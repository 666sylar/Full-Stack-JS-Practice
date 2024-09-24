/*
1. Вивести в консоль квадрати чисел від 1 до 10 (за допомогою циклу)
*/
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}
console.log("");

/*
2. Написати функцію, яка запитує через prompt пароль користувача, порівнює його з тим, який у неї збережений (захардкоджений у константі). Якщо пароль співпав - виводить на консоль “Ви успішно увійшли в систему”, якщо ні - продовжує запитувати пароль і перевіряти, поки не введуть правильно (за допомогою вічного цикла)
*/
function checkPassword() {
  const correctPassword = "123";
  while (true) {
    let userPassword = prompt("Введіть пароль:");
    if (userPassword === correctPassword) {
      console.log("Ви успішно увійшли в систему");
      break;
    } else {
      console.log("Невірний пароль. Спробуйте ще раз.");
    }
  }
}

checkPassword();
console.log("");

/*
3. Обчислити сумму чисел від 1 до 100 і вивести її в консоль
*/
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);
console.log("");

/*
4. Вивести числа від 10 до 50, які кратні 5.
*/
for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
console.log("");

/*
5. Намалювати в консолі символами “*” трикутник заданого користувачем розміру

*
**
***
****
*****
******

*/
let triangleSize = Number(prompt("Введіть розмір трикутника:"));

for (let i = 1; i <= triangleSize; i++) {
  console.log("*".repeat(i));
}
console.log("");

/*
6. Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)
*/
let squareSize = Number(prompt("Введіть розмір квадрата:"));

for (let i = 0; i < squareSize; i++) {
  let line = "";
  for (let j = 0; j < squareSize; j++) {
    if (i === 0 || i === squareSize - 1 || j === 0 || j === squareSize - 1 || i === j) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
console.log("");

/*
7. Задачка з *: Зробити квадрат зі зворотньою діагоналлю (з правого верхнього до лівого нижнього)
*/
squareSize = Number(prompt("Введіть розмір квадрата:"));

for (let i = 0; i < squareSize; i++) {
  let line = "";
  for (let j = 0; j < squareSize; j++) {
    if (i === 0 || i === squareSize - 1 || j === 0 || j === squareSize - 1 || j === squareSize - i - 1) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
