import { TextField } from "@material-ui/core";
import React from "react";
import { useCallback } from "react";
import { TextLabel } from "../models/TextLabel";


type LabelEditorProps = {
    label: TextLabel;
    updateText: (id: string, newText: string) => void;
}

export const LabelEditor: React.FC<LabelEditorProps> = ({ label, updateText }) => {
    const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const newText = event.target.value;
        updateText(label.id, newText);
    }, [label, updateText]);

    return (
        <li id={label.id} className="p-2 bg-white text-gray-700 text-left">
            <div>
                <TextField
                    onChange={handleChange}
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