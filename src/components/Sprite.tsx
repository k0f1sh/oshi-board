import { useCallback } from "react";
import Draggable from "react-draggable";
import { TextLabel } from "../models/TextLabel";


type Pos = {
    x: number;
    y: number;
}

type SpriteProps = {
    label: TextLabel;
    selectedId: string | null;
    handleSelect: (id: string | null) => void;
}

export const Sprite: React.FC<SpriteProps> = ({ label, selectedId, handleSelect }) => {
    const isSelected = label.id === selectedId;

    const onStart = useCallback(() => {
        handleSelect(label.id);
    }, [label.id, handleSelect]);


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
        <pre id={label.id}>
            <Draggable onStart={onStart}>
                <div style={style}>
                    {label.text}
                </div >
            </Draggable>
        </pre>
    );
};

