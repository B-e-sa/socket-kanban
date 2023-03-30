import style from '@/components/board/Board.module.css'
import { addContent, switchBoards } from '@/redux/features/workspaceSlice'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { useState } from 'react'
import TextArea from '../text_area/TextArea'

interface IBoardProps {
    boardProps: {
        index: number
        title: string,
        contents: {
            id: number;
            content: string;
            assigned: never[];
        }[];
        id: number;
        bgColor: string;
        workspaceId: number;
    }
}

const Board = ({ boardProps }: IBoardProps) => {

    const [_dragging, setDragging] = useState(false);

    const dispatch = useAppDispatch();

    const {
        title,
        contents,
        id,
        bgColor,
        workspaceId,
        index
    } = boardProps;

    const handleDragEnd = () => {
        setDragging(false)
    }

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        setDragging(true);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", index.toString());
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetBoxIndex: number) => {
        e.preventDefault();

        const pickedBoxIndex = e.dataTransfer.getData("text/plain");

        dispatch(switchBoards({ pickedBoxIndex, targetBoxIndex }))

    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    }

    // TODO
    // translate by mouse pos

    return (
        <div
            className={style.board}
            style={{
                backgroundColor: bgColor + "27"
            }}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            onDrop={(e) => handleDrop(e, index)}
            draggable
        >
            <div
                className={style.board_header}
                style={{ backgroundColor: bgColor }}
            >
                <h3 className={style.title}>
                    {title}
                </h3>
            </div>
            <div>
                {contents?.map(content => {
                    return (
                        <div
                            style={{ backgroundColor: bgColor + "ac" }}
                            className={style.board_item}
                            key={content.id}
                        >
                            <TextArea {...content} />
                        </div>
                    )
                })}
                <span
                    onClick={() => dispatch(addContent({ workspaceId: workspaceId, boardId: id }))}
                    className={style.add_item}
                >
                    +
                </span>
            </div>
        </div >
    )
}

export default Board