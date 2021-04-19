import { InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@material-ui/core";
import React, { CSSProperties } from "react";
import { useCallback } from "react";
import { ColorChangeHandler, ColorResult, CompactPicker, SliderPicker, TwitterPicker } from "react-color";
import { TextLabel } from "../models/TextLabel";

type LabelEditorProps = {
    label: TextLabel;
    selectedId: string | null;
    updateText: (id: string, newText: string) => void;
    updateSize: (id: string, newSize: number) => void;
    updateFont: (id: string, newFont: string) => void;
    updateColor: (id: string, newColor: string) => void;
    handleSelect: (id: string | null) => void;
}

export const LabelEditor: React.FC<LabelEditorProps> = ({ label, selectedId, updateText, updateSize, updateFont, updateColor, handleSelect }) => {
    const isSelected = label.id === selectedId;

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

    const handleChangeColor: ColorChangeHandler = useCallback((color: ColorResult, event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(color);
        updateColor(label.id, color.hex);
    }, [label, updateColor]);

    return (
        <li id={label.id} className={"p-2 bg-white text-gray-700 text-left shadow rounded " + (isSelected ? "shadow-lg" : "")}>
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
                <div className="p-2 flex">
                    <Typography className="pr-4" id="size-slider" gutterBottom>
                        color
                    </Typography>
                    <CompactPicker onChange={handleChangeColor} />
                </div>
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
                <MenuItem value={"'Dela Gothic One', cursive"}><span className="pl-2" style={{ fontFamily: "'Dela Gothic One', cursive" }}>Dela Gothic One あいうえお</span></MenuItem>
                <MenuItem value={"'DotGothic16', sans-serif"}><span className="pl-2" style={{ fontFamily: "'DotGothic16', sans-serif" }}>DotGothic16 あいうえお</span></MenuItem>
                <MenuItem value={"'Hachi Maru Pop', cursive"}><span className="pl-2" style={{ fontFamily: "'Hachi Maru Pop', cursive" }}>Hachi Maru Pop あいうえお</span></MenuItem>
                <MenuItem value={"'Kiwi Maru', serif"}><span className="pl-2" style={{ fontFamily: "'Kiwi Maru', serif" }}>Kiwi Maru あいうえお</span></MenuItem>
                <MenuItem value={"'Kosugi', sans-serif"}><span className="pl-2" style={{ fontFamily: "'Kosugi', sans-serif" }}>Kosugi あいうえお</span></MenuItem>
                <MenuItem value={"'M PLUS 1p', sans-serif"}><span className="pl-2" style={{ fontFamily: "'M PLUS 1p', sans-serif" }}>M PLUS 1p あいうえお</span></MenuItem>
                <MenuItem value={"'M PLUS Rounded 1c', sans-serif"}><span className="pl-2" style={{ fontFamily: "'M PLUS Rounded 1c', sans-serif" }}>M PLUS Rounded 1c あいうえお</span></MenuItem>
                <MenuItem value={"'New Tegomin', serif"}><span className="pl-2" style={{ fontFamily: "'New Tegomin', serif" }}>New Tegomin あいうえお</span></MenuItem>
                <MenuItem value={"'Noto Sans JP', sans-serif"}><span className="pl-2" style={{ fontFamily: "'Noto Sans JP', sans-serif" }}>Noto Sans JP あいうえお</span></MenuItem>
                <MenuItem value={"'Potta One', cursive"}><span className="pl-2" style={{ fontFamily: "'Potta One', cursive" }}>Potta One あいうえお</span></MenuItem>
                <MenuItem value={"'Reggae One', cursive"}><span className="pl-2" style={{ fontFamily: "'Reggae One', cursive" }}>Reggae One あいうえお</span></MenuItem>
                <MenuItem value={"'RocknRoll One', sans-serif"}><span className="pl-2" style={{ fontFamily: "'RocknRoll One', sans-serif" }}>RocknRoll One あいうえお</span></MenuItem>
                <MenuItem value={"'Sawarabi Gothic', sans-serif"}><span className="pl-2" style={{ fontFamily: "'Sawarabi Gothic', sans-serif" }}>Sawarabi Gothic あいうえお</span></MenuItem>
                <MenuItem value={"'Sawarabi Mincho', sans-serif"}><span className="pl-2" style={{ fontFamily: "'Sawarabi Mincho', sans-serif" }}>Sawarabi Mincho あいうえお</span></MenuItem>
                <MenuItem value={"'Shippori Mincho', serif"}><span className="pl-2" style={{ fontFamily: "'Shippori Mincho', serif" }}>Shippori Mincho あいうえお</span></MenuItem>
                <MenuItem value={"'Shippori Mincho B1', serif"}><span className="pl-2" style={{ fontFamily: "'Shippori Mincho B1', serif" }}>Shippori Mincho B1 あいうえお</span></MenuItem>
                <MenuItem value={"'Stick', sans-serif"}><span className="pl-2" style={{ fontFamily: "'Stick', sans-serif" }}>Stick あいうえお</span></MenuItem>
                <MenuItem value={"'Train One', cursive"}><span className="pl-2" style={{ fontFamily: "'Train One', cursive" }}>Train One あいうえお</span></MenuItem>
                <MenuItem value={"'Yusei Magic', sans-serif"}><span className="pl-2" style={{ fontFamily: "'Yusei Magic', sans-serif" }}>Yusei Magic あいうえお</span></MenuItem>
            </Select>
        </div>
    );
}