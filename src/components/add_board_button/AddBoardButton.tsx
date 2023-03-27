import React from 'react'
import style from '@/components/add_board_button/AddBoardButton.module.css'

const AddBoard = () => {
    return (
        <div className={style.add_board_button_header}>
            <div style={{ display: "flex" }}>
                <span>+</span>
            </div>
        </div>
    )
}

export default AddBoard;