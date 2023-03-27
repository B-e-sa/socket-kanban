/*
{
    id: number;
    name: string;
}
*/

import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn } from "typeorm";
import { Board } from "./Board";

@Entity() 
export class Workspace {
    @PrimaryGeneratedColumn()
    id!: number

    @Column("varchar", { length: 15 })
    title!: string

    @OneToMany(() => Board, (board) => board.workspace)
    boards!: Board[]

    @CreateDateColumn()
    createdAt!: Date
}