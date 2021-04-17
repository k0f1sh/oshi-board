import { useCallback, useState } from "react";
import Draggable from "react-draggable";


type Pos = {
    x: number;
    y: number;
}

type SpriteProps = {
    id: number;
    text: string;
    size: number;
}

export const Sprite: React.FC<SpriteProps> = ({ id, text, size }) => {

    const selectedStyle: React.CSSProperties = {
        borderStyle: "dashed",
        borderWidth: "3px",
        borderColor: "#60A5FA",
    }

    const modelStyle: React.CSSProperties = {
        userSelect: "none",
        position: "absolute",
        top: 0,
        left: 0,
        display: "inline-block",
        padding: "1rem",
        fontSize: size.toString() + "px",
    };

    const style = { ...modelStyle, ...selectedStyle };
    return (
        <Draggable>
            <div style={style}>
                {text}
            </div >
        </Draggable>
    );
};

