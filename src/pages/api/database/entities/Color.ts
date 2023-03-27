/*
    {
        id: number,
        name: string,
        hexCode: string
    }
*/

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class Color {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar', { length: 20 })
    name!: string;

    @Column('varchar', { length: 7 })
    hexColor!: string;
}