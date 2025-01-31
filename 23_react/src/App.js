import UserList from "./components/UserList";
import usersData from "./components/UserList/data";

/* 
Базовий рівень

Створити компонент UserList, який приймаючи пропс usersArray (об'єкт з даними користувачів) зможе відобразити картки користувачів на сторінці.
В якості даних про користувачів можете використовувати дані з файлу, прикладеного до цього завдання.

Просунутий рівень

Реалізуйте заглушку, яка з'являється, якщо зображення користувача не змогло провантажитися. Заглушка може бути div і повинна малюватись замість картинки (коли картинка не змогла провантажитися, то з'явиться подія про помилку. Його можна зловити обробником onError)
*/

function App() {
  return (
    <>
      <UserList users={usersData} />
    </>
  );
}

export default App;
