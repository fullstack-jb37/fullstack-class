import { Column, Entity, JoinTable, ManyToMany } from 'typeorm'
import { Person } from './Person'
import { Customer } from './Customer'

@Entity('suppliers')
export class Supplier extends Person {
  @Column()
  stars: number

  @ManyToMany(() => Customer, (customer) => customer.suppliers)
  @JoinTable({
    name: 'suppliers-customers',
    joinColumn: {
      name: 'supplier_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'customer_id',
      referencedColumnName: 'id',
    },
  })
  customers: Customer[]
}
