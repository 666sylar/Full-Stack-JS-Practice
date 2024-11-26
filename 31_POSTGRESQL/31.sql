/*
Використовувати таблицю з попереднього ДЗ: STUDENTS(id, first_name, last_name, birthday, phone_number, group, avg_mark, gender, entered_at, department) (мається на увазі 30 завдання)

Реалізувати запити:
 */
--Отримати інформацію про студентів (ім'я+прізвище, дата народження) у порядку від найстаршого до наймолодшого.
SELECT
  first_name || ' ' || last_name as full_name,
  birthday
FROM
  students
ORDER BY
  birthday;

--Отримати список шифрів груп, що не повторюються.
SELECT DISTINCT
  "group"
FROM
  students;

--Отримати рейтинговий список студентів (ім'я (*або ініціал)+прізвище, середній бал): спочатку студентів із найвищим середнім балом, наприкінці з найменшим.
SELECT
  substr (first_name, 1, 1) || '. ' || last_name as full_name,
  avg_mark
FROM
  students
ORDER BY
  avg_mark DESC;

--Отримати другу сторінку списку студентів під час перегляду по 6 студентів на сторінці.
SELECT
  *
FROM
  students
LIMIT
  6
OFFSET
  6;

--Отримати список 3-х найуспішніших студентів (ім'я, прізвище, середній бал, група).
SELECT
  first_name,
  last_name,
  avg_mark,
  "group"
FROM
  students
ORDER BY
  avg_mark DESC
LIMIT
  3
OFFSET
  0;

--*Отримати максимальний середній бал серед усіх студентів.
SELECT
  max(avg_mark) as max_avg_mark
FROM
  students;

--*Отримати інфо про студентів (ініціал+прізвище, номер телефону), де номер телефону буде частково прихований та представлений у форматі: +38012******* (тобто видно код оператора, але не сам номер).
SELECT
  substr (first_name, 1, 1) || '. ' || last_name as full_name,
  concat (substr (phone_number, 1, 6), '*******') as masked_phone
FROM
  students;

--Відобразити студентів на ім'я Anton та прізвище Antonov.
SELECT
  *
FROM
  students
WHERE
  first_name = 'Anton'
  AND last_name = 'Antonov';

--Відобразити студентів, які народилися в період із 2005 по 2008 рік.
SELECT
  *
FROM
  students
WHERE
  extract(
    YEAR
    FROM
      birthday
  ) BETWEEN 2005 AND 2008;

--Відобразити студентів на ім'я Mykola із середніми балами більше 4.5.
SELECT
  *
FROM
  students
WHERE
  first_name = 'Mykola'
  AND avg_mark > 4.5;

--Відобразити кількість студентів, які навчаються у кожній групі.
SELECT
  "group",
  count(*) as amount
FROM
  students
GROUP BY
  "group";

--Відобразити загальну кількість студентів, які вступили 2018 року.
SELECT
  count(*) as amount
FROM
  students
WHERE
  entered_at = 2018;

--*Відобразити студентів, які користуються послугами оператора Київстар. (тобто код 098 або 096 або ...)
SELECT
  *
FROM
  students
WHERE
  SUBSTR (phone_number, 4, 3) IN ('098', '096', '067');

--*Відобразити середній (середній) бал студентів жіночої статі кожного факультету. Список впорядкувати за зменшенням середнього балу. Стовпчик із середнім балом назвати avg_avg_mark.
SELECT
  department,
  avg(avg_mark) as avg_avg_mark
FROM
  students
WHERE
  gender = 'F'
GROUP BY
  department
ORDER BY
  avg_avg_mark DESC;

--*Відобразити мінімальний середній бал студентів факультету інформаційних технологій, що народилися влітку, залежно від року вступу. Виводити інформацію лише про ті роки вступу, де мінімальний середній бал вищий за 3,5.
SELECT
  entered_at,
  min(avg_mark) AS min_avg_mark
FROM
  students
WHERE
  department = 'Information Technology'
  AND extract(
    MONTH
    FROM
      birthday
  ) BETWEEN 6 AND 8
GROUP BY
  entered_at
HAVING
  min(avg_mark) > 3.5;