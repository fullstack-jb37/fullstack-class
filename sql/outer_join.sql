use sql_store;

select * 
from customers
join orders
using(customer_id);

select * 
from customers
left outer join orders
using(customer_id);


select * 
from orders
right join customers
using(customer_id);

select *
from customers
left join orders
using(customer_id)
left join shippers
using(shipper_id);

use sql_hr;

    
SELECT *
FROM employees emp1
right  JOIN 
employees emp2 
ON emp1.reports_to = emp2.employee_id;


use sql_store;
select *
from orders
right join 
shippers
using(shipper_id)



