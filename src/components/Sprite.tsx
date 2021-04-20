import { useCallback } from "react";
import Draggable, { DraggableData, DraggableEventHandler } from "react-draggable";
import { TextLabel } from "../models/TextLabel";


type Pos = {
    x: number;
    y: number;
}

type SpriteProps = {
    label: TextLabel;
    selectedLabel: TextLabel | null;
    handleSelect: (id: string | null) => void;
    handlePos: (id: string, pos: Pos) => void;
}

export const Sprite: React.FC<SpriteProps> = ({ label, selectedLabel, handleSelect, handlePos }) => {
    const isSelected = label === selectedLabel;

    const onStart = useCallback(() => {
        handleSelect(label.id);
    }, [label.id, handleSelect]);

    const handleDrag: DraggableEventHandler = useCallback((e, data) => {
        handlePos(label.id, { x: data.x, y: data.y });
    }, [label, handlePos]);

    const selectedStyle: React.CSSProperties = {
        borderStyle: "dashed",
        borderWidth: "2px",
        borderColor: "#60A5FA",
        padding: "10px",
    }

    const modelStyle: React.CSSProperties = {
        userSelect: "none",
        position: "absolute",
        top: 0,
        left: 0,
        display: "inline-block",
        padding: "12px", // 10px + selectedStyle分のborderWidth
        fontSize: label.size.toString() + "px",
        textAlign: "left",
        fontFamily: label.font,
        color: label.color,
    };

    let style = { ...modelStyle };
    if (isSelected) {
        style = { ...style, ...selectedStyle };
    }


    return (
        <pre id={label.id} className="z-10">
            <Draggable onStart={onStart} onStop={handleDrag} position={label.pos}>
                <div style={style}>
                    {label.text}
                </div >
            </Draggable>
        </pre>
    );
};

