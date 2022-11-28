update invoices 
set 
 payment_total = payment_total + 1
where 
	client_id in (
		select client_id
        from 
        clients 
        where 
        state in ('NY', 'OR')
    );
    
 select * from invoices;
 
 use sql_store;
 
 insert into sql_hr.employees
 (
	employee_id,
    first_name,
    last_name,
    job_title,
    salary,
    reports_to,
    office_id
 )
 select
	floor(rand()*30000),
    first_name,
    last_name,
    'Broker',
    10111,
    37270,
    1
from 
	customers
where 
	customer_id in (
		select customer_id 
        from customers 
        join orders using(customer_id) 
        where order_id in (3, 7)
    );
    
select * from sql_hr.employees;


select * 
from products
where unit_price > (
	select unit_price from products where product_id = 3
);

SELECT 
    *
FROM
    products
WHERE
    product_id NOT IN (SELECT DISTINCT
            product_id
        FROM
            order_items);
            
SELECT 
    customer_id, first_name, last_name
FROM
    customers
WHERE
    customer_id IN (SELECT DISTINCT
            customer_id
        FROM
            orders
                JOIN
            order_items USING (order_id)
        WHERE
            order_items.product_id = 3);
            



SELECT 
    distinct customer_id, first_name, last_name
FROM
    customers
join
	orders using(customer_id)
JOIN
	order_items USING (order_id)
WHERE
	order_items.product_id = 3;
    
use sql_invoicing;

-- option 1
SELECT 
    *
FROM
    invoices
WHERE
    invoice_total > (SELECT 
            MAX(invoice_total)
        FROM
            invoices
        WHERE
            client_id = 3);
            
-- option 2		
SELECT 
    *
FROM
    invoices
WHERE
    invoice_total > all (SELECT 
            invoice_total
        FROM
            invoices
        WHERE
            client_id = 3);

select * from clients where client_id = any
(select client_id
from 
invoices
group by client_id
having count(*) > 1);


use sql_hr;


select * from employees e
where salary = 
(select max(salary)
from employees
where office_id = e.office_id);

use sql_invoicing; 

-- option 1
select distinct client_id, name from clients join invoices using(client_id);

-- option 2
select *
from clients c
where exists (select client_id from invoices where client_id = c.client_id);

-- option 3
select * from clients where client_id in (select client_id from invoices);


select 
invoice_id,
invoice_total,
(
	select avg(invoice_total)
    from invoices
) as avarage,
(invoice_total - (select avarage)) as diff
from invoices;

select * from (
select 
invoice_id,
invoice_total,
(
	select avg(invoice_total)
    from invoices
) as avarage,
(invoice_total - (select avarage)) as diff
from invoices
) as invoices_summary
join payments using(invoice_id);




    