import Draggable from "react-draggable";
import { TextLabel } from "../models/TextLabel";


type Pos = {
    x: number;
    y: number;
}

type SpriteProps = {
    label: TextLabel,
}

export const Sprite: React.FC<SpriteProps> = ({ label }) => {

    const selectedStyle: React.CSSProperties = {
        borderStyle: "dashed",
        borderWidth: "1px",
        borderColor: "#60A5FA",
    }

    const modelStyle: React.CSSProperties = {
        userSelect: "none",
        position: "absolute",
        top: 0,
        left: 0,
        display: "inline-block",
        padding: "1rem",
        fontSize: label.size.toString() + "px",
        textAlign: "left",
    };

    const style = { ...modelStyle, ...selectedStyle };
    return (
        <pre id={label.id}>
            <Draggable>
                <div style={style}>
                    {label.text}
                </div >
            </Draggable>
        </pre>
    );
};

