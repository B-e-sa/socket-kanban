import AddBoard from '@/components/add_board_button/AddBoardButton';
import Board from '@/components/board/Board';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/hooks';
import { useState, useEffect } from "react";
import style from '@/components/workspace/Workspace.module.css';

interface IWorkspace {
    id: number;
    name: string;
    boards: {
        id: number;
        title: string;
        contents: {
            id: number;
            content: string;
        }[];
        bgColor: string;
    }[];
}

const Workspace = () => {

    const [workspace, setWorkspace] = useState<IWorkspace>();

    const { allWorkspaces, currentWorkspace } = useAppSelector(state => state.reducer);

    useEffect(() => {

        setWorkspace(allWorkspaces.find(workspace => {
            return workspace.id === currentWorkspace
        }))

    }, [allWorkspaces, currentWorkspace])

    return (
        <div className={style.workspace}>
            <h1 style={{ marginBottom: 20 }}>
                {workspace?.name}
            </h1>
            <div style={{ display: "flex" }}>
                {workspace?.boards.map(board => {
                    return <Board key={board.title} {...board} />;
                })}
                <AddBoard workspaceId={workspace?.id} />
            </div>
        </div>
    )
}

export default Workspace