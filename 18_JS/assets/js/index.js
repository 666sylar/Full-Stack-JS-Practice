/*
1. Прописати у html-розмітці кнопку (<button>) з будь-яким селектором (класс, id). За допомогою DOM отримати посилання на цей елемент та навісити на нього обробник події кліку. За кліком кнопка має викликати модальне вікно (alert) з текстом “Привіт тобі, клацальщик!”
*/

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => alert("Hello, clicker!"));

/*
2. Створити посилання з текстом “клікни, аби з’явилась кнопка”. За натиснення на посилання поряд з ним має з’явитись новий елемент - кнопка.
*/

const section = document.createElement("section");
btn.after(section);

const link = document.createElement("a");
link.href = "#";
link.textContent = "Click to display the button";
section.append(link);

link.addEventListener(
  "click",
  (event) => {
    event.preventDefault();
    const newBtn = document.createElement("button");
    newBtn.textContent = `\u{1F9D9}`;
    link.after(newBtn);
  },
  { once: true }
);

/*
3. “Лампочка”. У розмітці прописати елемент (article або div), з початковими стилями, які роблять елемент круглим, сірого кольору тла, з темно-сірою рамкою. Також прописати в розмітці кнопку, за натиснення на яку у елемента-лампочки мають змінитись стилі - тло має стати жовтим, рамка - білою.
*/

const bulb = document.querySelector("#bulb");
bulb.classList.add("off");
const bulbSwitchBtn = document.querySelector("#bulbSwitch");
bulbSwitchBtn.addEventListener("click", () => {
  bulb.classList.toggle("off");
  bulb.classList.toggle("on");
});
