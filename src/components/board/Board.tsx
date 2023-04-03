import style from '@/components/board/Board.module.css'
import { addContent } from '@/redux/features/workspaceSlice'
import { useAppDispatch } from '@/redux/hooks/hooks'
import Content from '../content/Content'

interface IProps {
    boardProps: {
        boardIndex: number
        index: number
        title: string,
        contents: {
            id: number;
            content: string;
            assigned: never[];
            tags: never[]
        }[];
        id: number;
        bgColor: string;
        workspaceId: number
    }
}

const Board = ({ boardProps }: IProps) => {

    const dispatch = useAppDispatch();

    const {
        title,
        contents,
        id,
        boardIndex,
        bgColor,
        workspaceId,
    } = boardProps;

    const handleAddItem = () => {
        dispatch(
            addContent({
                workspaceId: workspaceId,
                boardId: id
            })
        );
    }
    
    return (
        <div
            className={style.board}
            style={{ backgroundColor: bgColor + "27" }}
        >
            <div
                className={style.board_header}
                style={{ backgroundColor: bgColor, }}
            >
                <h3 className={style.title}>
                    {title}
                </h3>
            </div>
            <div>
                {contents?.map((content, index) => {

                    const props = { content, bgColor, index, id, boardIndex, workspaceId };

                    return <Content key={content.id} {...props} />;

                })}
                <span
                    onClick={handleAddItem}
                    className={style.add_item}
                >
                    +
                </span>
            </div>
        </div >
    )
}

export default Board