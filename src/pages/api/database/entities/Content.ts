
/*
*   contents: {
*    id: number;
*    content: string;
*   }
*/

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable, CreateDateColumn } from "typeorm";
import { Board } from "./Board";
import { User } from "./User";

@Entity()
export class Content {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToMany(() => User)
    @JoinTable()
    users!: User[];

    @Column("text")
    content!: string;

    @ManyToOne(() => Board, (board) => board.contents)
    board!: Board;

    @CreateDateColumn()
    createdAt!: Date;
}