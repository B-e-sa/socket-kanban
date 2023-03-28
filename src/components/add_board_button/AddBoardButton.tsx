import React from 'react'
import style from '@/components/add_board_button/AddBoardButton.module.css'
import { useAppDispatch } from '@/redux/hooks/hooks';
import { addBoard } from '@/redux/features/workspaceSlice';

const AddBoard = ({ workspaceId }: { workspaceId: number | undefined }) => {

    const dispatch = useAppDispatch();

    return (
        <button onClick={() => dispatch(addBoard(workspaceId))} className={style.add_board_button}>
            <div style={{ display: "flex" }}>
                <span>+</span>
            </div>
        </button>
    )
}

export default AddBoard;