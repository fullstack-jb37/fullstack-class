import { Customer } from '../interfaces/customer'
import customerModel from '../models/customers'


export const save = async (data: Customer): Promise<number | null> => {
    try {
        const {firstName, lastName, email, points} = data
        const customer = new customerModel(firstName, lastName, email, points ? points : 0)
        const [ res ] = await customer.save()
        return res.affectedRows ? res.insertId : null
    } catch (error) {
        console.log(error)
        return null
    }
}

export const find = async (id? : string) : Promise<any> => {
    const [customer] = await customerModel.find(id)
    return customer
}

export const update = async (id: string, data: Customer): Promise<boolean> => {
    const {firstName, lastName, email, points} = data
    if(firstName === undefined && lastName === undefined && email === undefined && points === undefined) return false

    const customer = new customerModel(firstName, lastName, email, points)

    const [res] = await customer.update(id)
    return res.affectedRows ? true : false
}


export const deleteById = async (id: string) : Promise<boolean> => {
    const [res] = await customerModel.delete(id)
    return res.affectedRows ? true : false
}