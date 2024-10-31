import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import HomePage from './page/HomePage';
import LoginPage from './page/Authorization/LoginPage';
import SignUpPage from './page/Authorization/SignUpPage';
import NotFoundPage from './page/NotFoundPage';
import './App.module.sass';

/*
Завдання: створити інтерфейси аутентифікації (форму входу або (*та) реєстрації).
Орієнтуватись на макети в прикладеному файлі.

- стилі повідомлень помилок можна краще за допомогою абсолютного позиціювання.
- *checkbox, radio

Вимоги до роботи:
- Валідація даних при введенні
- Для кожного поля виводити повідомлення про помилку
- *Стилі реагують на стан валідації
- *Для перемикання між сторінками використовувати React Router

Використовувані технології:
- React.js
- Formik
- yup
- *react-router-dom@5 або react-router-dom@6
- classnames
- SASS
*/

/*
Завдання: створити інтерфейси аутентифікації (форму входу або (*та) реєстрації).
Орієнтуватись на макети в прикладеному файлі.

- стилі повідомлень помилок можна краще за допомогою абсолютного позиціювання.
- *checkbox, radio

Вимоги до роботи:
- Валідація даних при введенні
- Для кожного поля виводити повідомлення про помилку
- *Стилі реагують на стан валідації
- *Для перемикання між сторінками використовувати React Router

Використовувані технології:
- React.js
- Formik
- yup
- *react-router-dom@5 або react-router-dom@6
- classnames
- SASS
*/

function App () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
