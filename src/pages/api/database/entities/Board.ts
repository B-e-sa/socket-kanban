import { CreateDateColumn } from 'typeorm';
/*
boards: {
    id: number;
    title: string;
    bgColor: string;
};
*/

import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Content } from './Content';
import { Workspace } from './Workspace';

@Entity() 
export class Board {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 15 })
    title!: string;

    @ManyToOne(() => Workspace, (workspace) => workspace.boards)
    workspace!: Workspace[];

    @OneToMany(() => Content, (content) => content.board)
    contents: Content[] | undefined;

    @CreateDateColumn()
    createdAt!: Date;
}