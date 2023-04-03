import { IWorkspace } from "@/types/types";

const getCurrentWorkspace = (workspaces: IWorkspace[], currentWorkspace: number) => {
    return workspaces.find(workspace => workspace.id === currentWorkspace);
}

export default getCurrentWorkspace;