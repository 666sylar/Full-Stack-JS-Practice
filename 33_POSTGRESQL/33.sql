/*
Вам потрібно розробити базу даних для зберігання інформації.
Спроектуйте базу даних та реалізуйте таблиці (і зв'язки між ними) для однієї з наведених предметних областей.

Предметна область «ДОСТАВКА СУШІ»

Короткий опис предметної області:
Магазин виготовляє різні види суші.
Кожна страва характеризується певним складом, вагою та ціною.
Клієнти здійснюють замовлення певної страви у потрібній кількості.
 */
CREATE DATABASE sushi_delivery;

CREATE TABLE
    IF NOT EXISTS customers (
        customer_id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100),
        phone VARCHAR(20),
        address VARCHAR(255)
    );

CREATE TABLE
    IF NOT EXISTS dishes (
        dish_id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        ingredients TEXT,
        weight INT,
        price DECIMAL(10, 2)
    );

CREATE TABLE
    IF NOT EXISTS orders (
        order_id SERIAL PRIMARY KEY,
        customer_id INT NOT NULL REFERENCES customers (customer_id) ON DELETE CASCADE,
        order_date DATE DEFAULT current_date,
        total_price DECIMAL(10, 2),
        status VARCHAR(50)
    );

CREATE TABLE
    IF NOT EXISTS order_details (
        order_detail_id SERIAL PRIMARY KEY,
        order_id INT NOT NULL REFERENCES orders (order_id) ON DELETE CASCADE,
        dish_id INT NOT NULL REFERENCES dishes (dish_id),
        quantity INT,
        price DECIMAL(10, 2)
    );

CREATE TABLE
    IF NOT EXISTS transactions (
        transaction_id SERIAL PRIMARY KEY,
        order_id INT NOT NULL REFERENCES orders (order_id),
        transaction_date DATE DEFAULT current_date,
        amount DECIMAL(10, 2)
    );

INSERT INTO
    customers (name, email, phone, address)
VALUES
    (
        'John Doe',
        'johndoe@example.com',
        '123-456-7890',
        '123 Sushi Street, City, Country'
    ),
    (
        'Jane Smith',
        'janesmith@example.com',
        '234-567-8901',
        '456 Noodle Avenue, City, Country'
    ),
    (
        'Alice Johnson',
        'alicej@example.com',
        '345-678-9012',
        '789 Seafood Road, City, Country'
    ),
    (
        'Bob Brown',
        'bobbrown@example.com',
        '456-789-0123',
        '1010 Fish Street, City, Country'
    ),
    (
        'Charlie White',
        'charliew@example.com',
        '567-890-1234',
        '2020 Rice Boulevard, City, Country'
    ),
    (
        'Diana Green',
        'dianag@example.com',
        '678-901-2345',
        '3030 Wasabi Road, City, Country'
    ),
    (
        'Eve Black',
        'eveb@example.com',
        '789-012-3456',
        '4040 Tempura Street, City, Country'
    ),
    (
        'Frank Blue',
        'frankb@example.com',
        '890-123-4567',
        '5050 Nori Lane, City, Country'
    ),
    (
        'Grace Yellow',
        'gracey@example.com',
        '901-234-5678',
        '6060 Soy Sauce Avenue, City, Country'
    ),
    (
        'Henry Violet',
        'henryv@example.com',
        '012-345-6789',
        '7070 Seaweed Way, City, Country'
    );

INSERT INTO
    dishes (name, ingredients, weight, price)
VALUES
    (
        'California Roll',
        'Crab, Avocado, Cucumber, Rice, Seaweed',
        250,
        12.99
    ),
    (
        'Tuna Sashimi',
        'Tuna, Soy Sauce, Wasabi',
        150,
        15.49
    ),
    (
        'Spicy Salmon Roll',
        'Salmon, Spicy Mayo, Rice, Seaweed',
        300,
        13.99
    ),
    (
        'Dragon Roll',
        'Shrimp Tempura, Avocado, Eel Sauce, Rice, Seaweed',
        350,
        18.99
    ),
    (
        'Shrimp Tempura',
        'Shrimp, Tempura Batter, Soy Sauce',
        200,
        16.99
    ),
    ('Salmon Nigiri', 'Salmon, Rice', 120, 10.99),
    (
        'Eel Roll',
        'Eel, Avocado, Rice, Seaweed',
        250,
        17.99
    ),
    (
        'Veggie Roll',
        'Cucumber, Avocado, Rice, Seaweed',
        220,
        8.99
    ),
    (
        'Rainbow Roll',
        'Tuna, Salmon, Avocado, Rice, Seaweed',
        300,
        20.99
    ),
    ('Maki Roll', 'Tuna, Rice, Seaweed', 180, 9.99);

INSERT INTO
    orders (customer_id, total_price, status, order_date)
VALUES
    (1, 28.48, 'Delivered', CURRENT_DATE),
    (2, 27.98, 'Processing', CURRENT_DATE - 1),
    (3, 18.99, 'Delivered', CURRENT_DATE - 2),
    (4, 59.97, 'Delivered', CURRENT_DATE - 3),
    (5, 39.99, 'Processing', CURRENT_DATE - 4),
    (6, 22.99, 'Cancelled', CURRENT_DATE - 5),
    (7, 17.49, 'Delivered', CURRENT_DATE - 6),
    (8, 44.97, 'Delivered', CURRENT_DATE - 7),
    (9, 31.98, 'Processing', CURRENT_DATE - 8),
    (10, 31.98, 'Cancelled', CURRENT_DATE - 9),
    (1, 60.96, 'Delivered', CURRENT_DATE - 10),
    (2, 45.47, 'Delivered', CURRENT_DATE - 11),
    (3, 79.95, 'Processing', CURRENT_DATE - 12),
    (4, 92.95, 'Delivered', CURRENT_DATE - 13),
    (5, 50.96, 'Processing', CURRENT_DATE - 14);

INSERT INTO
    order_details (order_id, dish_id, quantity, price)
VALUES
    (1, 1, 1, 12.99),
    (1, 2, 1, 15.49),
    (2, 3, 2, 13.99),
    (3, 4, 1, 18.99),
    (4, 5, 2, 19.99),
    (4, 6, 1, 9.99),
    (5, 6, 2, 9.99),
    (6, 7, 1, 16.99),
    (7, 8, 1, 17.49),
    (8, 9, 3, 14.99),
    (8, 10, 1, 15.99),
    (9, 10, 2, 15.99),
    (10, 5, 1, 19.99),
    (10, 6, 1, 9.99),
    (11, 1, 2, 12.99),
    (11, 2, 2, 15.49),
    (12, 3, 3, 13.99),
    (12, 4, 1, 18.99),
    (13, 5, 4, 19.99),
    (13, 6, 2, 9.99),
    (14, 7, 3, 16.99),
    (14, 8, 1, 17.49),
    (15, 9, 2, 14.99),
    (15, 10, 2, 15.99);

INSERT INTO
    transactions (order_id, amount, transaction_date)
VALUES
    (1, 28.48, CURRENT_DATE),
    (3, 18.99, CURRENT_DATE - 2),
    (4, 59.97, CURRENT_DATE - 3),
    (7, 17.49, CURRENT_DATE - 6),
    (8, 44.97, CURRENT_DATE - 7),
    (11, 60.96, CURRENT_DATE - 10),
    (12, 45.47, CURRENT_DATE - 11),
    (14, 92.95, CURRENT_DATE - 13);

--Склад та вартість (певного) замовлення
SELECT
    o.order_id,
    o.order_date,
    d.name AS dish_name,
    od.quantity,
    od.price,
    (od.quantity * od.price) AS total_dish_price
FROM
    orders AS o
    JOIN order_details AS od ON o.order_id = od.order_id
    JOIN dishes AS d ON od.dish_id = d.dish_id
WHERE
    o.order_id = 1;

--Перелік замовлень на сьогодні
SELECT
    *
FROM
    orders
WHERE
    order_date = current_date;

--Перелік замовлень за певний тиждень
SELECT
    *
FROM
    orders
WHERE
    order_date BETWEEN current_date - INTERVAL '7 days' AND current_date;

--Виручка за день
SELECT
    SUM(total_price) AS daily_revenue
FROM
    orders
WHERE
    order_date = current_date;

--Виручка за місяць (сума всіх замовлень за місяць)
SELECT
    SUM(total_price) AS monthly_revenue
FROM
    orders
WHERE
    EXTRACT(
        MONTH
        FROM
            order_date
    ) = EXTRACT(
        MONTH
        FROM
            current_date
    )
    AND EXTRACT(
        YEAR
        FROM
            order_date
    ) = EXTRACT(
        YEAR
        FROM
            current_date
    );

--Список клієнтів, які обслуговувалися цього місяця
SELECT DISTINCT
    c.customer_id,
    c.name,
    c.email,
    c.phone,
    c.address
FROM
    customers AS c
    JOIN orders AS o ON c.customer_id = o.customer_id
WHERE
    EXTRACT(
        MONTH
        FROM
            o.order_date
    ) = EXTRACT(
        MONTH
        FROM
            current_date
    )
    AND EXTRACT(
        YEAR
        FROM
            o.order_date
    ) = EXTRACT(
        YEAR
        FROM
            current_date
    );

--Топ 5 страв на місяць
SELECT
    d.name AS dish_name,
    SUM(od.quantity) AS total_quantity
FROM
    order_details AS od
    JOIN dishes AS d ON od.dish_id = d.dish_id
    JOIN orders AS o ON od.order_id = o.order_id
WHERE
    EXTRACT(
        MONTH
        FROM
            o.order_date
    ) = EXTRACT(
        MONTH
        FROM
            current_date
    )
    AND EXTRACT(
        YEAR
        FROM
            o.order_date
    ) = EXTRACT(
        YEAR
        FROM
            current_date
    )
GROUP BY
    d.name
ORDER BY
    total_quantity DESC
LIMIT
    5;

--Прибуток від продажу за місяць (3% від суми замовлення)
SELECT
    SUM(total_price * 0.03) AS monthly_profit
FROM
    orders
WHERE
    EXTRACT(
        MONTH
        FROM
            order_date
    ) = EXTRACT(
        MONTH
        FROM
            current_date
    )
    AND EXTRACT(
        YEAR
        FROM
            order_date
    ) = EXTRACT(
        YEAR
        FROM
            current_date
    );