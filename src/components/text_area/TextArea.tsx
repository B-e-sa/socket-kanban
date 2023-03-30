import style from '@/components/text_area/TextArea.module.css';
import { useState } from 'react';

const TextArea = ({ content }: { content: string }) => {

    const [text, setText] = useState(content);
    const [height, setHeight] = useState<number>(46)

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {

        setText(event.target.value)

        setHeight(event.target.value.length + 45)

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