import db from '../db'

export default class Customer {
  constructor(
    private firstName: string  | undefined,
    private lastName: string  | undefined,
    private email: string  | undefined,
    private points: number | undefined
  ) {}


  async save(): Promise<any>{
    const query = `
        insert into customers(first_name, last_name, email, points)
        value ('${this.firstName}', '${this.lastName}', '${this.email}', ${this.points})
    `

    return await db.execute(query)
  }

  static async find(id?: string): Promise<any> {
    const query = `
        select * from customers ${id ? `where id = ${id}` : ''}
    `
    return db.execute(query)
  }

  async update(id: string): Promise<any> {
    const setStatement = `
        ${this.firstName ? `first_name = '${this.firstName}',` : ''}
        ${this.lastName ? `last_name = '${this.lastName}',` : ''}
        ${this.email ? `email = '${this.email}',` : ''}
        ${this.points ? `points = '${this.points}'` : ''}
    `
    .trim().replace(/,$/, '')

    const query = `update customers set
    ${setStatement}
    where id = ${id}`

    return await db.execute(query)
  }

  static async delete(id: string) : Promise<any> {
    const query = `
    delete from customers
    where id = ${id}
    `

    return await db.execute(query)
  }
}
