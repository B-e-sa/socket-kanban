import AddBoard from "@/components/add_board_button/AddBoardButton";
import Board from "@/components/board/Board";
import { useAppSelector } from "@/redux/hooks/hooks";
import { useEffect, useState } from "react";



export default function Test() {

    const [dragging, setDragging] = useState(false);
    
    const [boxes, setBoxes] = useState(
        [
            {
                id: 1,
                content: "box1"
            },
            {
                id: 2,
                content: "box2"
            },
            {
                id: 3,
                content: "box3"
            }
        ]
    );


    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
        setDragging(true);
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/plain", index);
    };

    const handleDragEnd = () => {
        setDragging(false)
    }

    const handleDrop = (e, index) => {

        e.preventDefault();

        const pickedBoxIndex = e.dataTransfer.getData("text/plain");

        // board that we're picking
        // boxes[data]

        // board that we're dropping into
        // boxes[index]

        // clone to switch boxes
        // const switchHandler = boxes[data]

        const switchHandler = boxes[pickedBoxIndex]

        boxes[pickedBoxIndex] = boxes[index]
        boxes[index] = switchHandler

    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div>
                {
                    boxes.map((box, index) => {
                        return <div
                            key={box.id}
                            draggable
                            onDragEnd={handleDragEnd}
                            onDragStart={(e) => handleDragStart(e, index)}
                            onDrop={(e) => handleDrop(e, index)}
                            onDragOver={handleDragOver}
                        >
                            {box.content}
                        </div>
                    })
                }
            </div>
        </>
    );

}