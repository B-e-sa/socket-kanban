import React from 'react'
import style from '@/components/board/Board.module.css'
import { Inter } from 'next/font/google'
import AddBoard from '../add_board_button/AddBoardButton'

interface IBoard {
    bgColor: string
    title: string
    contents: {
        id: number;
        content: string;
    }[]
}

const Board = ({ title, bgColor, contents }: IBoard) => {
    return (
        <div
            className={style.board}
            style={{
                backgroundColor: bgColor + "27"
            }}
        >
            <div
                className={style.board_header}
                style={{
                    backgroundColor: bgColor
                }}
            >
                <h3 className={style.title}>{title}</h3>
            </div>
            <div>
                {contents.map(content => {
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
                <span className={style.add_item}>
                    +
                </span>
            </div>
        </div >
    )
}

export default Board