/*
Завдання: написати додаток “список справ”

Необхідний функціонал - форма вводу і кнопка, за натиснення на яку записаний у форму текст відображається елементом списку).

Опціональний функціонал (завдання з зірочкою): кожен елемент має кнопку “видалення”, за натиснення на яку елемент списку видаляється і зникає.

Ця задача потребує мислення в першу чергу про дані (інформацію від користувача, яка має десь зберігатись), і вже в другу чергу - про елементи, які рендеряться на екран. Спробуйте в першу чергу спиратись на дані, а потім синхронізовувати їх і елементи на екрані.

Стилістично оформити власним за смаком.
*/

const form = document.querySelector("#to-do>form");
const input = document.querySelector("#to-do input");
const todoList = document.querySelector("#to-do>ul");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newTask = input.value.trim();
  if (newTask) {
    addTask(newTask);
    input.value = "";
  }
});

const addTask = (task) => {
  const li = document.createElement("li");
  li.textContent = task;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", removeTask);

  li.append(deleteButton);
  todoList.append(li);
};

const removeTask = (event) => {
  const li = event.target.closest("li");
  todoList.removeChild(li);
};
