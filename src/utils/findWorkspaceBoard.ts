interface IWorkspaces {
    id: number;
    name: string;
    bgColor: string;
    boards: {
        id: number;
        title: string;
        contents: {
            id: number;
            content: string;
            assigned: never[];
            tags: string[];
        }[];
    }[];
}[]

export const findWorkspaceBoard = (workspacesArray: IWorkspaces[], workspaceId: number, workspaces: IWorkspaces[]) => {

    const workspaceIndex =
        workspacesArray.findIndex(workspace => {
            return workspace.id === workspaceId
        });

    return workspaces[workspaceIndex].boards;

}