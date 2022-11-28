select 
 max(invoice_total) as max,
 min(invoice_total) as min,
 avg(invoice_total) as avg,
 sum(invoice_total) as sum,
 count(invoice_total) as invoices_count,
 count(payment_total) as payments_count,
 count(payment_date) as payments_date,
 count(*) as count
from invoices
where invoice_id <> 8;


select count(distinct client_id) from invoices;

select * from invoices;


