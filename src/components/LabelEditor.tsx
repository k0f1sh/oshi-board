import { InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useCallback } from "react";
import { TextLabel } from "../models/TextLabel";


type LabelEditorProps = {
    label: TextLabel;
    updateText: (id: string, newText: string) => void;
    updateSize: (id: string, newSize: number) => void;
    updateFont: (id: string, newFont: string) => void;
}

export const LabelEditor: React.FC<LabelEditorProps> = ({ label, updateText, updateSize, updateFont }) => {
    const handleChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        updateText(label.id, newText);
    }, [label, updateText]);

    const handleChangeSize = useCallback((event: React.ChangeEvent<{}>, value: number | number[]) => {
        if (value instanceof Array) {
            updateSize(label.id, value[0]);
        } else {
            updateSize(label.id, value);
        }

    }, [label, updateSize]);

    const handleChangeFont = useCallback((event: React.ChangeEvent<{ value: unknown }>) => {
        updateFont(label.id, event.target.value as string);
    }, [label, updateFont]);

    return (
        <li id={label.id} className="p-2 bg-white text-gray-700 text-left shadow rounded">
            <div>
                <TextField
                    multiline
                    onChange={handleChangeText}
                    className="w-full"
                    id="outlined-basic"
                    label="text"
                    variant="outlined"
                    value={label.text}
                />
                <div className="p-2 flex">
                    <Typography className="pr-4" id="size-slider" gutterBottom>
                        size
                    </Typography>
                    <Slider value={label.size} onChange={handleChangeSize} aria-labelledby="size-slider" max={300} min={1} />

                </div>
                <FontSelector label={label} onChange={handleChangeFont} />
            </div>
        </li>
    );
};

type FontSelectorProps = {
    label: TextLabel;
    onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
}

const FontSelector: React.FC<FontSelectorProps> = ({ label, onChange }) => {
    return (
        <div className="p-2 flex">
            <Typography className="pr-4" id="font-select" gutterBottom>
                font
            </Typography>
            <Select
                labelId="demo-simple-select-label"
                id="font-select"
                value={label.font}
                onChange={onChange}
            >
                <MenuItem value={"'Dela Gothic One', cursive"}>Dela Gothic One</MenuItem>
                <MenuItem value={"'DotGothic16', sans-serif"}>DotGothic16</MenuItem>
                <MenuItem value={"'Hachi Maru Pop', cursive"}>Hachi Maru Pop</MenuItem>
                <MenuItem value={"'Kiwi Maru', serif"}>Kiwi Maru</MenuItem>
                <MenuItem value={"'Kosugi', sans-serif"}>Kosugi</MenuItem>
                <MenuItem value={"'M PLUS 1p', sans-serif"}>M PLUS 1p</MenuItem>
                <MenuItem value={"'M PLUS Rounded 1c', sans-serif"}>M PLUS Rounded 1c</MenuItem>
                <MenuItem value={"'New Tegomin', serif"}>New Tegomin</MenuItem>
                <MenuItem value={"'Noto Sans JP', sans-serif"}>Noto Sans JP</MenuItem>
                <MenuItem value={"'Potta One', cursive"}>Potta One</MenuItem>
                <MenuItem value={"'Reggae One', cursive"}>Reggae One</MenuItem>
                <MenuItem value={"'RocknRoll One', sans-serif"}>RocknRoll One</MenuItem>
                <MenuItem value={"'Sawarabi Gothic', sans-serif"}>Sawarabi Gothic</MenuItem>
                <MenuItem value={"'Sawarabi Mincho', sans-serif"}>Sawarabi Mincho</MenuItem>
                <MenuItem value={"'Shippori Mincho', serif"}>Shippori Mincho</MenuItem>
                <MenuItem value={"'Shippori Mincho B1', serif"}>Shippori Mincho B1</MenuItem>
                <MenuItem value={"'Stick', sans-serif"}>Stick</MenuItem>
                <MenuItem value={"'Train One', cursive"}>Train One</MenuItem>
                <MenuItem value={"'Yusei Magic', sans-serif"}>Yusei Magic</MenuItem>
            </Select>
        </div>
    );
}