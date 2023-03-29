import React from 'react'
import style from '@/components/board/Board.module.css'
import { Inter } from 'next/font/google'
import AddBoard from '../add_board_button/AddBoardButton'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { addContent } from '@/redux/features/workspaceSlice'

interface IBoardProps {
    boardProps: {
        title: string,
        contents: any,
        id: number,
        bgColor: string,
        workspaceId: number
    }
}

const Board = ({ boardProps }: IBoardProps, color: any) => {

    const { title, contents, id, bgColor, workspaceId } = boardProps;

    const dispatch = useAppDispatch()

    return (
        <div
            className={style.board}
            style={{ backgroundColor: bgColor + "27" }}
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
                {contents.map((content: any) => {
                    return (
                        <div
                            style={{ backgroundColor: bgColor + "ac" }}
                            className={style.board_item}
                            key={content.id}
                        >
                            {content.content}
                        </div>
                    )
                })}
                <span
                    onClick={() => dispatch(addContent({ workspaceId: workspaceId, boardId: id  }))}
                    className={style.add_item}
                >
                    +
                </span>
            </div>
        </div >
    )
}

export default Board