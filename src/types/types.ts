export interface IContent {
    id: number
    content: string
    assigned: never[]
    tags: never[]
}

export interface IContent {
    id: number
    content: string
    assigned: never[]
    tags: never[]
}

export interface IBoard {
    id: number;
    title: string;
    contents: {
        id: number;
        content: string;
        assigned: never[];
        tags: never[];
    }
}

export interface IWorkspace {
    id: number
    name: string
    bgColor: string
    boards: IBoard[]
}
