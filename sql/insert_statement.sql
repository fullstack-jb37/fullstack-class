use sql_store;

-- insert into customers
-- values
-- (
-- 	default,
--     'Yossi',
--     'Arye',
--     default,
--     default,
--     'Some address',
--     'Beit lehem haglilit',
--     'IL',
--     default
-- );

select * from customers;

-- insert into customers
-- (
-- 	first_name,
--     last_name,
--     address,
--     city,
--     state
-- )
-- values
-- (
--     'Shalom',
--     'David',
--     'Some address',
--     'Revaya',
--     'IL'
-- );

select * from customers;

-- insert into customers
-- (
-- 	first_name,
--     last_name,
--     address,
--     city,
--     state,
--     phone,
--     birth_date,
--     points
-- )
-- values
-- (
--     'David',
--     'Davidi',
--     'Some address',
--     'Hodaya',
--     'IL',
--     '05588558765',
--     '1991-03-04',
--     1001
-- ),
-- (
--     'Amir',
--     'Bar',
--     'Ayelet Hshachar',
--     'some',
--     'IL',
--     '05588558765',
--     '2000-01-01',
--     1001
-- ),
-- (
--     'Itshak',
--     'Rabin',
--     'Balfur',
--     'some',
--     'IL',
--     '05588558765',
--     '1934-01-01',
--     1001
-- );


-- INSERT INTO `sql_store`.`orders`
-- (
-- `customer_id`,
-- `order_date`,
-- `status`,
-- `comments`,
-- `shipped_date`,
-- `shipper_id`)
-- VALUES
-- (
-- last_insert_id(),
-- '2022-12-12',
-- 1,
-- default,
-- '2022-12-12',
-- 1);
select * from orders;
select * from sql_hr.employees;

insert into sql_hr.employees 
(employee_id, first_name, last_name, job_title, salary, office_id, reports_to)
select floor(rand()*30000), first_name, last_name, 'Broker', 10000, 1, 37270 
from customers
where points > 3000


-- select floor(rand()*30000), first_name, last_name, job_title, salary, office_id, reports_to
-- from sql_hr.employees


