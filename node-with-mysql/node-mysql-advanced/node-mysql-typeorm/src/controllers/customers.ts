import { Customer } from '../entity/Customer'


export const createCustomer = async (record: Customer): Promise<Customer> => {
    const customer = Customer.create(record)
    return await customer.save()
}