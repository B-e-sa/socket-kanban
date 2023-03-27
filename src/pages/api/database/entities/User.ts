import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn,  } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column("varchar", { length: 15, nullable: false })
    name!: string;

    @Column("varchar", { length: 30, nullable: false })
    password!: string;

    @CreateDateColumn()
    createdAt!: string;
}