import { useCallback, useState } from "react";


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
    let { pos: { x, y }, handleMouseDown, handleMouseUp, handleMouseMove } = useDrag();

    const selectedStyle: React.CSSProperties = {
        borderStyle: "dashed",
        borderWidth: "3px",
        borderColor: "#60A5FA",
    }

    const modelStyle: React.CSSProperties = {
        userSelect: "none",
        position: "absolute",
        top: y,
        left: x,
        display: "inline-block",
        padding: "1rem",
        fontSize: size.toString() + "px",
    };

    const style = { ...modelStyle, ...selectedStyle };
    return (
        <div style={style} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove} >
            { text}
        </div >
    );
};


type UseDragState = {
    pos: Pos;
    handleMouseDown: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    handleMouseUp: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    handleMouseMove: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const useDrag = (): UseDragState => {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [pos, setPos] = useState<Pos>({ x: 0, y: 0 });
    const [offset, setOffset] = useState<Pos>({ x: 0, y: 0 });

    const handleMouseDown = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setIsDragging(true);
        setOffset({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
        console.log({ x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY });
    }, []);

    const handleMouseUp = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        setIsDragging(false);
    }, []);

    const handleMouseMove = useCallback((event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (isDragging) {
            setPos({ x: event.screenX, y: event.screenY });
        };
    }, [isDragging, offset]);

    return {
        pos,
        handleMouseDown,
        handleMouseUp,
        handleMouseMove,
    }
};