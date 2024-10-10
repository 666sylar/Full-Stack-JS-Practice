/*
Зверстати адаптивну форму використовуючи flex (вирівняти поля введення по лівому та правому краям).
(картинку на задньому фоні можна взагалі не вставляти, це просто приклад)

Валідність/невалідність введених даних візуалізувати за допомогою псевдокласів :valid, :invalid.

Коректність введених даних перевіряти за допомогою атрибутів pattern, min/maxlength та вбудованої валідації для email.

Випадаючий список реалізувати select`ом (https://developer.mozilla.org/ru/docs/Web/HTML/Element/select).

Для message використовувати textarea (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea).


*Реалізувати обробник на submit форми, в якому значення всіх полів форми запакувати у відповідні поля об'єкта (name, email, phone, subject, message). Номер телефону поєднати в один рядок. В message прибрати зайві пробіли (прибрати на початку і кінці; замінити кілька пробілів, що йдуть поспіль, на один).
*/

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const email = document.getElementById("email").value;
  const phone1 = document.getElementById("phone1").value;
  const phone2 = document.getElementById("phone2").value;
  const phone3 = document.getElementById("phone3").value;
  const subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  const phone = `${phone1}${phone2}${phone3}`;

  message = message.trim().replace(/\s+/g, " ");

  const formData = {
    name: `${firstName} ${lastName}`,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  console.log(formData);
});
