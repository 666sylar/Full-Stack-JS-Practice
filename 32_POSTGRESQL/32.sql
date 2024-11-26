/*
Продумати типи даних та обмеження для зазначених полів.
Реалізувати зв'язки між таблицями.
Заповнити таблиці тестовими даними (можна використовувати таблицю students з попереднього дз, видаливши або ігноруючи стовпчик avg_mark).

Короткий опис предметної області:
кожен студент може вивчати кілька дисциплін, кожну дисципліну може прослухати кілька студентів (тобто зв'язок «багато-до-багатьох», звідси додаткова таблиця Exams).
На вивчення дисципліни приділяється певна кількість годин.
Коли студент починає вивчати дисципліну, це відображається в таблиці Exams без оцінки (NULL), якщо він вже склав іспит, тоді ставиться оцінка.
 */
CREATE DATABASE university;

CREATE TABLE
    IF NOT EXISTS students (
        id_stud SERIAL PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        surname VARCHAR(50) NOT NULL,
        birthday DATE CHECK (birthday < current_date) NOT NULL
    );

CREATE TABLE
    IF NOT EXISTS courses (
        id_course SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        description TEXT,
        hours INT NOT NULL CHECK (hours > 0)
    );

CREATE TABLE
    IF NOT EXISTS exams (
        id_stud INT NOT NULL,
        id_course INT NOT NULL,
        mark NUMERIC(2, 1) CHECK (
            mark >= 0
            AND mark <= 5
        ),
        PRIMARY KEY (id_stud, id_course),
        FOREIGN KEY (id_stud) REFERENCES students (id_stud) ON DELETE CASCADE,
        FOREIGN KEY (id_course) REFERENCES courses (id_course) ON DELETE CASCADE
    );

INSERT INTO
    students (name, surname, birthday)
VALUES
    ('Peter', 'Petrenko', '2000-05-15'),
    ('Ivan', 'Ivanenko', '2001-03-22'),
    ('Oksana', 'Kovalenko', '2000-07-10');

INSERT INTO
    courses (title, description, hours)
VALUES
    (
        'Programming Basics',
        'Introduction to programming',
        120
    ),
    (
        'Database Design',
        'Basics of database design',
        100
    ),
    ('Mathematics', 'Higher mathematics', 150),
    (
        'Information Technologies',
        'Fundamentals of Information Technologies',
        130
    );

INSERT INTO
    exams (id_stud, id_course, mark)
VALUES
    (1, 1, 4.5),
    (1, 2, NULL),
    (2, 1, 3.7),
    (2, 3, 3),
    (3, 1, 4.8);

--З’єднання таблиць:
--Відобразити імена та прізвища студентів та назви курсів, що ними вивчаються.
SELECT
    s.name,
    s.surname,
    c.title
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
    JOIN courses AS c ON e.id_course = c.id_course;

--Створити представлення по запиту 1.
CREATE VIEW
    student_courses AS
SELECT
    s.name,
    s.surname,
    c.title
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
    JOIN courses AS c ON e.id_course = c.id_course;

--Відобразити бали студента Петра Петренка з дисципліни «Основи програмування».
SELECT
    e.mark
FROM
    exams AS e
    JOIN students AS s ON e.id_stud = s.id_stud
    JOIN courses AS c ON e.id_course = c.id_course
WHERE
    s.name = 'Peter'
    AND s.surname = 'Petrenko'
    AND c.title = 'Programming Basics';

--Відобразити студентів, які мають бали нижче 3.5.
SELECT
    s.name,
    s.surname,
    c.title,
    e.mark
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
    JOIN courses c ON c.id_course = e.id_course
WHERE
    e.mark < 3.5;

--Відобразити студентів, які прослухали дисципліну «Основи програмування» та мають за неї оцінку.
SELECT
    s.name,
    s.surname,
    e.mark
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
    JOIN courses AS c ON e.id_course = c.id_course
WHERE
    c.title = 'Programming Basics'
    AND e.mark IS NOT NULL;

--Відобразити середній бал та кількість курсів, які відвідав кожен студент.
SELECT
    s.name,
    s.surname,
    AVG(e.mark) AS avg_mark,
    COUNT(e.id_course) AS course_count
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
GROUP BY
    s.id_stud;

--Відобразити студентів, які мають середній бал вище 4.0.
SELECT
    s.name,
    s.surname,
    AVG(e.mark) AS avg_mark
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
GROUP BY
    s.id_stud
HAVING
    AVG(e.mark) > 4.0;

--*Відобразити дисципліни, які ще не прослухав жоден студент.
SELECT
    c.title
FROM
    courses AS c
    LEFT JOIN exams AS e ON c.id_course = e.id_course
WHERE
    e.id_course IS NULL;

--Підзапити:
--Отримати список студентів, у яких день народження збігається із днем народження Петра Петренка.
SELECT
    s.name,
    s.surname
FROM
    students AS s
WHERE
    s.birthday = (
        SELECT
            birthday
        FROM
            students
        WHERE
            name = 'Peter'
            AND surname = 'Petrenko'
    );

--Відобразити студентів, які мають середній бал вище, ніж Петро Петренко.
SELECT
    s.name,
    s.surname
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
GROUP BY
    s.id_stud
HAVING
    AVG(e.mark) > (
        SELECT
            AVG(e1.mark)
        FROM
            exams e1
        WHERE
            e1.id_stud = (
                SELECT
                    id_stud
                FROM
                    students
                WHERE
                    name = 'Peter'
                    AND surname = 'Petrenko'
            )
    );

--Отримати список предметів, у яких кількість годин більше, ніж у "Information Technologies".
SELECT
    c.title
FROM
    courses AS c
WHERE
    c.hours > (
        SELECT
            hours
        FROM
            courses
        WHERE
            title = 'Information Technologies'
    );

/*
Отримати список
студент | предмет | оцінка
де оцінка має бути більшою за будь-яку оцінку Петра Петренка.
 */
SELECT
    s.name,
    c.title,
    e.mark
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
    JOIN courses AS c ON e.id_course = c.id_course
WHERE
    e.mark > (
        SELECT
            MAX(e.mark)
        FROM
            exams AS e
            JOIN students AS s ON e.id_stud = s.id_stud
        WHERE
            s.name = 'Peter'
            AND s.surname = 'Petrenko'
    );

--Умовні вирази:
/*
Вивести
студент | предмет | оцінка
щоб оцінка виводилася у літерному вигляді "відмінно", "добре" або "задовільно".
 */
SELECT
    s.name,
    c.title,
    CASE
        WHEN e.mark >= 4.5 THEN 'excellent'
        WHEN e.mark >= 3.5 THEN 'good'
        ELSE 'acceptably'
    END AS grade
FROM
    students AS s
    JOIN exams AS e ON s.id_stud = e.id_stud
    JOIN courses AS c ON e.id_course = c.id_course;