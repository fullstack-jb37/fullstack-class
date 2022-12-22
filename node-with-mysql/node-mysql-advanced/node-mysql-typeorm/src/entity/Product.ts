import { Column, Entity, BaseEntity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm'
import { Order } from './Order';

export enum Currency {
  ILS = 'ILS',
  USD = 'USD',
  EUR = 'EUR',
}

@Entity('products')
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  quantity: number

  @Column('decimal', { precision: 10, scale: 2 })
  unit_price: number

  @Column({ type: 'enum', enum: Currency })
  currency: Currency

  @ManyToMany(() => Order, (order) => order.products, {onDelete: "CASCADE", onUpdate: "CASCADE"})
  orders: Order[]
}
