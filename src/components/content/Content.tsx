import style from '@/components/content/Content.module.css'
import { switchContents } from '@/redux/features/workspaceSlice'
import { useAppDispatch } from '@/redux/hooks/hooks'
import { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import TextArea from '../text_area/TextArea'
import { IContent } from '@/types/types'

interface IItem {
    type: string
    index: number
    id: number
    boardIndex: number
}

interface IProps {
    id: number
    index: number
    content: IContent
    bgColor: string
    boardIndex: number
}

const Content = ({
    index,
    content,
    bgColor,
    boardIndex
}: IProps) => {

    const ref = useRef<HTMLDivElement | null>(null);

    const dispatch = useAppDispatch();

    const [{ opacity }, dragRef] = useDrag(
        () => ({
            item: {
                type: "CONTENT",
                index: index,
                boardIndex: boardIndex,
                id: content.id
            },
            type: "CONTENT",
            collect: monitor => ({
                opacity: monitor.isDragging() ? 0 : 1,
            })
        }),
        []
    )

    const [, dropRef] = useDrop({
        accept: "CONTENT",
        hover(item: IItem, monitor) {

            const draggedIndex = item.index;
            const targetIndex = index;

            if (content.id === item.id || draggedIndex === targetIndex)
                return;

            const draggedItemBoardIndex = item.boardIndex;
            const targetItemBoardIndex = boardIndex;

            const targetSize = ref.current!.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset!.y - targetSize.top;

            if (
                draggedIndex < targetIndex
                && draggedTop < targetCenter
            ) return;

            if (
                draggedIndex > targetIndex
                && draggedTop > targetCenter
            ) return;

            dispatch(
                switchContents({
                    draggedIndex,
                    draggedItemBoardIndex,
                    targetIndex,
                    targetItemBoardIndex
                })
            );

            item.index = targetIndex;

        }
    }, [])

    dragRef(dropRef(ref))

    const textProps = {...content, boardIndex, index}

    return (
        <div
            className={style.board_item}
            ref={ref}
            draggable
            style={{ backgroundColor: bgColor + "ac", opacity }}
            key={content.id}
        >
            <TextArea {...textProps} />
        </div>
    )
}

export default Content