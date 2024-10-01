/*
1. Написати клас для реалізації структури даних Зв’язаний Список (LinkedList) (за прикладом ментора у відео-записах) та виконати на його основі наступну задачу:

- реалізувати у класа метод deleteItem(data), який приймає певне значення data і видаляє зі зв’язаного списка перший знайдений елемент з такими даними.

- реалізувати метод addNthElement(data, position), який приймає значення data і порядковий номер елемента position, після якого він має вставити новий вузел списку з такими самими даними
*/

console.log("№1");

class LinkedList {
  constructor() {
    this.head = null;
  }

  createNode(data) {
    return { data, next: null };
  }

  add(data) {
    const newNode = this.createNode(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  deleteItem(data) {
    if (!this.head) return;

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  addNthElement(data, position) {
    const newNode = this.createNode(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let index = 0;
    while (current && index < position - 1) {
      current = current.next;
      index++;
    }

    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  [Symbol.iterator]() {
    let current = this.head;

    return {
      next() {
        if (current) {
          const value = current.data;
          current = current.next;
          return { value, done: false };
        } else {
          return { done: true };
        }
      },
    };
  }
}

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);

list.deleteItem(20);

list.addNthElement(25, 1);

console.log(list);

/*
2. Написати клас для реалізації власної структури даних, яка представляє собою колекцію елементів, нумеровану на кшталт “*1*”, “*2*” і т.д.

(Екземпляр цього класу - об’єкт вигляду
    {
      *1*: ‘first value’,
      *2*: ‘second value’,
      *3*: ‘third value’
    })
*/

console.log("№2");

class NumberedCollection {
  constructor() {
    this.collection = {};
    this.counter = 0;
  }

  add(value) {
    this.counter++;
    this.collection[`*${this.counter}*`] = value;
  }

  print() {
    console.log(this.collection);
  }
}

const myCollection = new NumberedCollection();

myCollection.add("first value");
myCollection.add("second value");
myCollection.add("third value");

myCollection.print();

/*
3*. До колекції з завдання №2 написати метод [Symbol.iterator], який реалізує принцип обходу колекції
*/

console.log("№3");

for (let item of list) {
  console.log(item);
}

/*
4. Задача про парні дужки.Написати функцію, яка приймає вираз, що містить дужки різних типів - (), [], {}, <>, і перевіряє, чи правильно вони відкриваються і закриваються.

checkSequence(‘()(([]))’) // true
checkSequence(‘{][)’) // false

Підказка: для реалізації використовуйте структуру Stack

(Зображення - підказка для реалізації)


Для початку зробіть функцію, яка підтримує хоча б один вид дужок, потім ускладніть її, в ідеалі - зробіть налаштовуваною, тобто щоб вона приймала як параметри пару дужок, на яку треба перевіряти
*/

console.log("№4");

function checkSequence(expression, brackets = ["()"]) {
  const stack = [];
  const openingBrackets = brackets.map((b) => b[0]);
  const closingBrackets = brackets.map((b) => b[1]);
  const matchingBracket = (closing) => openingBrackets[closingBrackets.indexOf(closing)];

  for (let char of expression) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.length === 0 || stack.pop() !== matchingBracket(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(checkSequence("()(([]))", ["()", "[]"]));
console.log(checkSequence("{][)", ["()", "{}", "[]"]));
