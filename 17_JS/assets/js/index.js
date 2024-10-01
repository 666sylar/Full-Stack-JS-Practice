/*
1. За допомогою DOM створити елемент section. Встановити у нього атрибут id зі значенням “root”. Всередину цього елемента прописати довільний рядок тексту. Встановити колір тексту для елемента. Відобразити елемент, зробивши його дочірнім до <body>
*/

const section = document.createElement("section");

section.setAttribute("id", "root");
section.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nihil obcaecati, quod ipsum, molestias porro minima eos nobis ea asperiores tempore voluptates ducimus error labore? Suscipit veritatis aperiam dolor. Ullam.";
section.setAttribute("style", "color: red;");

document.body.append(section);

/*
2. За допомогою DOM отримати посилання на існуючий на сторінці елемент (div або section, який заздалегідь має існувати в розмітці і містити якийсь тексту) та змінити йому колір тла на фіолетовий, а колір тексту на білий.
*/

const div = document.querySelector("div");

div.setAttribute("style", "background-color: purple; color: white;");

/*
3. За допомогою prompt отримати у користувача його ім’я, після чого створити і відобразити на сторінці елемент <h1>, який містить текст “Вітаю, (введене користувачем ім’я)”
*/

const userName = prompt("Enter your name");

const h1 = document.createElement("h1");

h1.textContent = `Hello, ${userName}`;

document.body.prepend(h1);
