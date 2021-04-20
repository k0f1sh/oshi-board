import { IconButton, InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import React, { CSSProperties, useState } from "react";
import { useCallback } from "react";
import { ColorChangeHandler, ColorResult, CompactPicker, SliderPicker, TwitterPicker } from "react-color";
import { TextLabel } from "../models/TextLabel";

type LabelEditorProps = {
    id: string;
    label: TextLabel;
    selectedLabel: TextLabel | null;
    updateText: (id: string, newText: string) => void;
    handleSelect: (id: string | null) => void;
    handleDelete: (id: string) => void;
}


// selectedLabelが毎回変わるので重いかも?
export const LabelEditor: React.FC<LabelEditorProps> = ({ id, label, selectedLabel, updateText, handleSelect, handleDelete }) => {
    const isSelected = label === selectedLabel;

    const handleChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        updateText(label.id, newText);
    }, [label, updateText]);

    const handleSelectLabel = useCallback((event: React.MouseEvent<HTMLElement>) => {
        handleSelect(label.id);
    }, [label, handleSelect]);

    const handleDeleteLabel = useCallback((event: React.MouseEvent<HTMLElement>) => {
        handleDelete(label.id);
    }, [label, handleSelect]);

    return (
        <li id={id} className={"p-2 text-gray-700 text-left rounded border border-4 " + (isSelected ? "border-indigo-800 border-dashed" : "border-white")} onClick={handleSelectLabel}>
            <div className="flex flex-row justify-between items-center">
                <TextField
                    multiline
                    onChange={handleChangeText}
                    className="w-full bg-white"
                    id="outlined-basic"
                    label="text"
                    variant="outlined"
                    value={label.text}
                />
                <div>
                    <IconButton aria-label="delete" onClick={handleDeleteLabel}>
                        <Delete fontSize="small" />
                    </IconButton>
                </div>
            </div>
        </li>
    );
};
