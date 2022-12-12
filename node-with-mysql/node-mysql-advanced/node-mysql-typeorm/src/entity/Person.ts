import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"

@Entity()
export class Person extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    age: number

    @Column()
    birth_date: Date

    @Column({length: 15})
    phone: string

    @Column({length: 50})
    address: string

    @Column({length: 50})
    city: string

    @Column({type: 'char', length: 2})
    state: string
}
