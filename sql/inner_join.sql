use sql_store;


SELECT 
    *
FROM
    customers
        JOIN
    orders ON orders.customer_id = customers.customer_id;


SELECT 
    order_id, customers.customer_id, first_name, last_name
FROM
    orders
        JOIN
    customers ON orders.customer_id = customers.customer_id;

-- aliases
SELECT 
    *
FROM
    customers c
        JOIN
    orders o ON c.customer_id = o.customer_id
        JOIN
    order_items oi ON oi.order_id = o.order_id
        JOIN
    sql_inventory.products p ON oi.product_id = p.product_id;

SELECT 
    *
FROM
    customers c
        JOIN
    orders o USING (customer_id)
        JOIN
    order_items oi USING (order_id)
        JOIN
    sql_inventory.products p USING (product_id);
    
    
SELECT 
    *
FROM
    customers c
        JOIN
    orders o
        JOIN
    order_items oi
        JOIN
    sql_inventory.products p ON c.customer_id = o.customer_id
        AND oi.order_id = o.order_id
        AND oi.product_id = p.product_id;
        
use sql_hr;

SELECT 
    *
FROM
    employees
        JOIN
    offices USING (office_id);
    
SELECT 
    *
FROM
    employees emp1
        JOIN
    employees emp2 ON emp1.reports_to = emp2.employee_id;

use sql_store;

SELECT 
    *
FROM
    customers c, orders o
where c.customer_id = o.customer_id; 


SELECT 
    *
FROM
    customers c 
cross join orders o;












