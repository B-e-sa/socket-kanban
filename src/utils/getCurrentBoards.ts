import { IWorkspace } from "@/types/types";
import getCurrentWorkspace from "./getCurrentWorkspace";

const getCurrentBoards = (workspaces: IWorkspace[], currentWorkspace: number) => {
    return getCurrentWorkspace(workspaces, currentWorkspace)!.boards;
}

export default getCurrentBoards;