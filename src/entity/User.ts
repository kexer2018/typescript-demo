import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  uid: number

  @Column()
  name: string

  @Column()
  age!: number

  @Column()
  address!: string

  @Column()
  email!: string

  @Column()
  school!: string

  @Column({ type: 'bigint' })
  createAt: number
}
