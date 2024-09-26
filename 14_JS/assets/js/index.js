console.log("1. Даний рядок тексту. Вивести його задом наперед");

let text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta cumque veniam, minus eum asperiores dolorem, nostrum ab est odit voluptas optio inventore molestias tempore voluptatibus velit distinctio unde iure. Odit.";

console.log(text);

function reverseText(str) {
  return str.split("").reverse().join("");
}

console.log(reverseText(text));

console.log("2. Написати функцію, яка приймає число з дрібною частиною і повертає тільки цілу частину");

function getIntegerPart(number) {
  return Math.trunc(number);
}

console.log(`${Math.PI} -> ${getIntegerPart(Math.PI)}`);

console.log(
  "3. Прийняти від користувача (за допомогою prompt) його ім’я і вивести його у модальне вікно великими літерами (‘alex’ -> ‘ALEX’)"
);

let userName = prompt("Enter your name: ");

alert(userName.toUpperCase());

console.log(
  "4. Написати функцію, яка приймає рядок тексту з датою у форматі “2021-22-09” і повертає її у вигляді “22.09.2021”"
);

function formatDate(date) {
  let [year, day, month] = date.split("-");

  return `${day}.${month}.${year}`;
}

console.log(formatDate("2021-22-09"));

console.log(
  "5. Написати функцію, яка приймає два рядки, написані у різному регістрі та порівнює їх незалежно від регістру."
);
/*
isEqual(‘pApA’, ‘papa’)  //true
isEqual(‘qwerty’, ‘QWErty’)  //true
isEqual(‘aaa’, ‘EEE’) //false 
*/

function isEqual(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

console.log(isEqual("pApA", "papa"));
console.log(isEqual("qwerty", "QWErty"));
console.log(isEqual("aaa", "EEE"));

console.log(
  "6. Написати функцію, яка викидає помилку під час роботи і перевірити роботу функції, викликавши її у блоці try-catch"
);

/**
 * @throws Error
 */
function throwError() {
  throw new Error("It's not a \u{1F41E}, it's a feature");
}

try {
  throwError();
} catch (error) {
  console.log(error);
}
