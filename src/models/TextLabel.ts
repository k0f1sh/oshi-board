
export type Pos = {
    x: number;
    y: number;
}


export type TextLabel = {
    id: string,
    pos: Pos;
    text: string,
    size: number,
    font: string,
    color: string,
    cssText: string,
}