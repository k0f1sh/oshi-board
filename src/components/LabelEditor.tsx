import { Slider, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useCallback } from "react";
import { TextLabel } from "../models/TextLabel";


type LabelEditorProps = {
    label: TextLabel;
    updateText: (id: string, newText: string) => void;
    updateSize: (id: string, newSize: number) => void;
}

export const LabelEditor: React.FC<LabelEditorProps> = ({ label, updateText, updateSize }) => {
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

    return (
        <li id={label.id} className="p-2 bg-white text-gray-700 text-left border-2 border-blue-300 shadow rounded">
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
                <div className="p-4 flex">
                    <Typography className="pr-4" id="size-slider" gutterBottom>
                        size
                    </Typography>
                    <Slider value={label.size} onChange={handleChangeSize} aria-labelledby="size-slider" max={300} min={1} />
                </div>

            </div>
        </li>
    );
};