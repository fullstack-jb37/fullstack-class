use sql_store;


select first_name, last_name, employee_id as id
from sql_hr.employees
union
select first_name, last_name,  customer_id as id
from customers;


(select customer_id, first_name, last_name, 'VIP' as status
from customers
where points > 1000
union
select customer_id, first_name, last_name, 'Regular' as status
from customers
where points <= 1000)
order by customer_id;



