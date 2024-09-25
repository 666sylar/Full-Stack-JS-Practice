console.log(
  "1. Об’явити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль"
);
let arr = [true, 2, "3", NaN, null];

console.log(arr);

for (elt of arr) {
  console.log(elt);
}

console.log("2. Дан масив з цілими числами. За допомогою циклу вивести елементи масива, які є простими числами");
function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);

arr.filter(isPrime).forEach((number) => console.log(number));

console.log("Завдання на методи масивів:");
console.log("3. Дано два масива: [1, 2, 3] і [4, 5, 6]. Об'єднати їх разом");
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

console.log(arr1);
console.log(arr2);
console.log(arr1.concat(arr2));

console.log("4. Даний масив [6, 5, 4]. Зробити з нього масив [4, 5, 6]");
arr = [6, 5, 4];

console.log(arr);
console.log(arr.reverse());

console.log("5. Даний масив [1, 2, 3]. Додати йому в кінець елементи 4, 5, 6");
arr = [1, 2, 3];

console.log(arr);
arr.push(4, 5, 6);
console.log(arr);

console.log("6. Даний масив [7, 8, 9]. Додати йому на початок 1, 2, 3");
arr = [7, 8, 9];

console.log(arr);
arr.unshift(1, 2, 3);
console.log(arr);

console.log("7. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль перший елемент та видаліть його.");
arr = ["aaa", "bbb", "ccc"];

console.log(arr);
console.log(arr.shift());
console.log(arr);

console.log("8. Даний масив ['aaa', 'bbb', 'ccc']. Виведіть в консоль та видаліть останній елемент");
arr = ["aaa", "bbb", "ccc"];

console.log(arr);
console.log(arr.pop());
console.log(arr);

console.log("9. Даний масив [9, 10, 11, 12, 13]. Скопіювати в новий масив елементи з другого по п'ятий");
arr = [9, 10, 11, 12, 13];

console.log(arr);
console.log(arr.slice(1, 5));

console.log("10. З масиву [1, 2, 3, 4, 5] зробити масив [1, 4, 5] (оригінальний має змінитись)");
arr = [1, 2, 3, 4, 5];

console.log(arr);
arr.splice(1, 2);
console.log(arr);

console.log("11. З масиву [1, 2, 3, 4, 5] скопіювати в новий масив [3, 4, 5]");
arr = [1, 2, 3, 4, 5];

console.log(arr);
console.log(arr.slice(2));

console.log(
  "12. З масиву [1, 2, 3, 4, 5] (не однією командою) зробити масив [1, 'w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello']"
);
arr = [1, 2, 3, 4, 5];

console.log(arr);
arr.splice(1, 0, "w", "trtr");
console.log(arr);
arr.splice(6, 1, "vvv", "a", "hello");
console.log(arr);

console.log(
  "Таска з *: Написати функцію, яка приймає рядок і масив голосних літер, повертає кількість включень голосних у заданому рядку"
);
/*
function countVovels(str, vovelsArray)

vovelsArray = [a, e, i, o, u, y]

'hello to you' // 6

'lorem ipsum dolor sit amet' // 9
*/
function countVowels(str, vowelsArray) {
  let count = 0;

  for (char of str.toLowerCase()) {
    if (vowelsArray.includes(char)) {
      count++;
    }
  }

  return count;
}

let vowelsArray = ["a", "e", "i", "o", "u", "y"];

console.log(vowelsArray);

console.log("hello to you -> ", countVowels("hello to you", vowelsArray));
console.log("lorem ipsum dolor sit amet -> ", countVowels("lorem ipsum dolor sit amet", vowelsArray));
