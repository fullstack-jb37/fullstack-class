create view invoices_summary as
select 
invoice_id,
invoice_total,
(
	select avg(invoice_total)
    from invoices
) as avarage,
(invoice_total - (select avarage)) as diff
from invoices;

select * from invoices_summary;

select * from invoices_summary
join payments using(invoice_id);

drop view invoices_summary;

create or replace view invoices_summary as
select 
invoice_id,
invoice_total,
(
	select avg(invoice_total)
    from invoices
) as avarage,
(invoice_total - (select avarage)) as diff,
payment_id,
amount
from invoices join payments using(invoice_id);


select * from invoices_summary;


update invoices_summary
set amount = 20
where payment_id = 2;


create or replace view invoices_left_to_pay
as
select 
invoice_id,
client_id,
invoice_total,
payment_total,
invoice_total - payment_total as amount_left_to_pay
from invoices
where invoice_total - payment_total > 0;


create or replace view payments_between_3_and_15 as
select * from payments where payment_id between 3 and 15;


insert into payments_between_3_and_15 (payment_id, client_id, invoice_id, date, amount, payment_method)
values (1, 2, 5, '2022-11-28', 8.18, 1);

select * from payments;

update payments_between_3_and_15 set payment_id = 16 where payment_id = 4;

select * from payments_between_3_and_15;


create or replace view payments_between_3_and_15 as
select * from payments where payment_id between 3 and 15 with check option;

-- Error Code: 1369. CHECK OPTION failed 'sql_invoicing.payments_between_3_and_15'
update payments_between_3_and_15 set payment_id = 21 where payment_id = 8;
