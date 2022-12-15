import { Column, Entity, ManyToMany, OneToMany } from 'typeorm'
import { Person } from './Person'
import { Order } from './Order'
import { Supplier } from './Supplier'

@Entity('customers')
export class Customer extends Person {
  @Column()
  points: number

  @OneToMany(() => Order, (order) => order.customer)
  orders: Order[]

  @ManyToMany(() => Supplier, (supplier) => supplier.customers)
  suppliers: Supplier[]
}
