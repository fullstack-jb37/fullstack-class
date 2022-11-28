select 
client_id,
 max(invoice_total) as max,
 min(invoice_total) as min,
 avg(invoice_total) as avg,
 sum(invoice_total) as sum,
 count(invoice_total) as invoices_count,
 count(payment_total) as payments_count,
 count(payment_date) as payments_date,
 count(*) as count
from invoices
where payment_date is not null
group by client_id;

insert into clients (client_id, name, address, city, state, phone) values (19, 'Amir', 'Some address', 'Jeruz', 'CA', '990-324-4344');

update invoices set client_id = 19 where invoice_id = 16;

SELECT 
    state, city, SUM(payment_total) AS sum_payment
FROM
    invoices
        JOIN
    clients USING (client_id)
GROUP BY state , city;

SELECT 
    state, city, SUM(payment_total) AS sum_payment
FROM
    invoices
        JOIN
    clients USING (client_id)
GROUP BY state , city
Having sum_payment > 100 ;

SELECT 
    state, city, SUM(payment_total) AS sum_payment
FROM
    invoices
        JOIN
    clients USING (client_id)
GROUP BY state , city with rollup;