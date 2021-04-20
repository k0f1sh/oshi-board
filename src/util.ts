

export const onClickStop = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation()
};


let idCount = 0;
export const generateId = (): string => {
    idCount += 1;
    return idCount.toString();
}
