import { DataSource } from 'typeorm';
import { User } from './entities/User';
import { Color } from './entities/Color';
import { Content } from './entities/Content';
import { Board } from './entities/Board';
import { Workspace } from './entities/Workspace';

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "database",
    synchronize: true,
    logging: true,
    entities: [
        User,
        Color,
        Content,
        Board,
        Workspace
    ],
    subscribers: [],
    migrations: [],
});