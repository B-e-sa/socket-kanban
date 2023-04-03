import style from '@/components/text_area/TextArea.module.css';
import { changeContentName } from '@/redux/features/workspaceSlice';
import { useAppDispatch } from '@/redux/hooks/hooks';
import { useState } from 'react';

const TextArea = ({ content, boardIndex, index }: { content: string, boardIndex: number, index: number }) => {

    const dispatch = useAppDispatch();

    const [text, setText] = useState(content);
    const [height, setHeight] = useState<number>(46)

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {

        setText(event.target.value)

        setHeight(event.target.value.length + 45)

        const text = event.target.value

        dispatch(changeContentName({ boardIndex, text, index }))

    }

    return (
        <textarea
            value={text}
            style={{ height }}
            onChange={handleChange}
            className={style.text_area}
        >
        </textarea>
    )
}

export default TextArea