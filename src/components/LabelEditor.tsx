import { InputLabel, MenuItem, Select, Slider, TextField, Typography } from "@material-ui/core";
import React, { CSSProperties } from "react";
import { useCallback } from "react";
import { ColorChangeHandler, ColorResult, CompactPicker, SliderPicker, TwitterPicker } from "react-color";
import { TextLabel } from "../models/TextLabel";

type LabelEditorProps = {
    label: TextLabel;
    selectedLabel: TextLabel | null;
    updateText: (id: string, newText: string) => void;
    handleSelect: (id: string | null) => void;
}

export const LabelEditor: React.FC<LabelEditorProps> = ({ label, selectedLabel, updateText, handleSelect }) => {
    const isSelected = label === selectedLabel;

    const handleChangeText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        updateText(label.id, newText);
    }, [label, updateText]);

    const handleSelectLabel = useCallback((event: React.MouseEvent<HTMLElement>) => {
        handleSelect(label.id);
    }, [label, handleSelect]);

    return (
        <li id={label.id} className={"p-2 bg-white text-gray-700 text-left rounded border border-4 " + (isSelected ? "border-indigo-800 border-dashed" : "border-white")} onClick={handleSelectLabel}>
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
            </div>
        </li>
    );
};
