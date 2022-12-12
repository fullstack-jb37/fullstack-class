import { Column, Entity, BaseEntity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { Customer } from './Customer'

enum Currency {
  ILS = 'ILS',
  USD = 'USD',
  EUR = 'EUR',
}

enum Status {
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}

@Entity('orders')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  quantity: number

  @Column('decimal', { precision: 10, scale: 2 })
  unit_price: number

  @Column({ type: 'enum', enum: Currency })
  currency: Currency

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  order_date: Date

  @Column({ type: 'enum', enum: Status })
  status: Status

  @Column({type: 'varchar', length: 255, name:'notes', nullable: true})
  comments: string

  @Column({nullable: false})
  is_paid: boolean

  @ManyToOne(()=> Customer, customer => customer.orders, {onDelete: "RESTRICT", onUpdate: "CASCADE"})
  @JoinColumn({name: 'customer_id'})
  customer: Customer
}
