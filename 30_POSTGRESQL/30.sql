/*
Створити базу даних та таблицю за наступною схемою:
STUDENTS(id, first_name, last_name, birthday, phone_number, group, avg_mark, gender, entered_at, department)

тут     group – шифр групи
           avg_mark – середній бал
           entered_at – рік вступу
           department – назва факультету

Продумати типи даних та обмеження для зазначених полів (стовпців).
Заповнити таблиці тестовими даними.
*/

CREATE DATABASE university;

CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    birthday DATE CHECK ( birthday < current_date ) NOT NULL,
    phone_number VARCHAR(15) UNIQUE NOT NULL,
    "group" VARCHAR(10) NOT NULL,
    avg_mark NUMERIC(3, 2) CHECK (avg_mark BETWEEN 0 AND 10),
    gender CHAR(1) CHECK (gender IN ('M', 'F')),
    entered_at SMALLINT CHECK (entered_at >= 1900),
    department VARCHAR(100) NOT NULL);

INSERT INTO students (first_name, last_name, birthday, phone_number, "group", avg_mark, gender, entered_at, department)
VALUES
    ('Anna', 'Kovalchuk', '2002-09-12', '380931223344', 'IT-21', 8.7, 'F', 2021, 'Information Technology'),
    ('Dmytro', 'Shevchenko', '2003-04-03', '380501112255', 'CS-22', 7.9, 'M', 2022, 'Computer Science'),
    ('Olha', 'Tkachenko', '2004-01-15', '380671009988', 'EC-20', 9.3, 'F', 2020, 'Economics'),
    ('Yaroslav', 'Borysenko', '2003-06-18', '380932345678', 'ME-21', 6.8, 'M', 2021, 'Mechanical Engineering'),
    ('Kateryna', 'Bondarenko', '2005-02-25', '380663344556', 'BI-23', 9.1, 'F', 2023, 'Biology'),
    ('Oleh', 'Lysenko', '2001-12-01', '380731231212', 'PH-19', 7.2, 'M', 2019, 'Physics'),
    ('Sofiia', 'Zinchuk', '2002-11-08', '380501234678', 'CH-20', 8.5, 'F', 2020, 'Chemistry'),
    ('Ivan', 'Hrytsenko', '2003-03-19', '380951112233', 'LAW-21', 8.0, 'M', 2021, 'Law'),
    ('Viktor', 'Mazurenko', '2004-07-22', '380672211334', 'CS-22', 7.5, 'M', 2022, 'Computer Science'),
    ('Alina', 'Stepanenko', '2005-05-10', '380939887766', 'IT-23', 9.0, 'F', 2023, 'Information Technology');
