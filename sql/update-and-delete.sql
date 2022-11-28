use sql_invoicing;

select * from invoices;

update invoices
set payment_total = 10, payment_date = '2022-11-28'
where invoice_id = 1;

select * from invoices;

update invoices
set payment_total = payment_total * 0.5, payment_date = due_date
where invoice_id between 1 and 2;

select * from invoices;

delete from invoices where invoice_id = 19;