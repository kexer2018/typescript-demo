import { Entity, Column, PrimaryGeneratedColumn,Timestamp } from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column()
    age!:number

    @Column()
    address!:string

    @Column()
    email!:string

    @Column()
    school!:string

    @Column({type:'timestamp'})
    createAt :Timestamp | number
}
