drop database if exists sql_store2;

create database if not exists sql_store2;

use sql_store2;

drop table if exists customers;

create table if not exists customers (
	customer_id int primary key auto_increment,
    first_name varchar(50) not null,
    points int not null default 0,
    email varchar(255) not null unique
);

insert into customers (first_name, email) values ('Yossi', 'yossi@yossi.com');

select * from customers;


alter table customers
add last_name  varchar(50) not null after first_name,
add city  varchar(50) not null,
modify column first_name varchar(55) default '',
drop points;

select * from customers;

insert into customers (last_name, email, city) values ('Tom', 'tom@tom.com', 'Tira');

select * from customers;

-- constraints
-- 1. not null
-- 2. unique
-- 3. primary key
-- 4. foreign key
-- 5. default
-- 6. check

drop table if exists orders;

create table if not exists orders (
	order_id int primary key auto_increment,
    customer_id int,
    foreign key (customer_id)
    references customers (customer_id)
    on update cascade on delete no action
);

-- drop table if exists customers;

insert into orders (customer_id) value (1);
insert into orders (customer_id) value (2);

select * from orders;

update customers set customer_id = 3 where customer_id = 1;

delete from customers where customer_id = 3;

-- relationship constraint
-- cascade
-- no action
-- restrict
-- set null
-- default

show create table orders;

alter table orders
drop foreign key orders_ibfk_1;

select * from orders;

update customers set customer_id = 4 where customer_id = 3;

alter table orders
add constraint fk_orders_customers
    foreign key (customer_id)
    references customers (customer_id)
    on update set null on delete cascade;
    
show engine innodb status; -- to show old errors

select * from customers;


insert into orders (customer_id) value (2);

select * from orders;

update customers set customer_id  = 50 where customer_id = 2;

insert into orders (customer_id) value (4);

delete from customers where customer_id = 4;

show create table orders;
alter table orders
drop primary key,
add another_primary int,
add primary key pk_orders (order_id, another_primary),
add check (another_primary < 10);

select * from orders;

insert into orders (customer_id, another_primary) value (50, 1);