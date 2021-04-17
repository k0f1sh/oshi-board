import { Button } from '@material-ui/core';
import { PlusOneOutlined } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import './App.css';
import { LabelEditor } from './components/LabelEditor';
import { Sprite } from './components/Sprite';
import { TextLabel } from './models/TextLabel';


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function App() {
  const [labels, setLables] = useState<TextLabel[]>([]);

  const updateText = useCallback((id: string, newText: string) => {
    setLables(labels.map((label) => {
      if (label.id === id) {
        return { ...label, text: newText };
      } else {
        return label;
      }
    }));
  }, [labels]);


  const handleNew = useCallback(() => {
    const newLable: TextLabel = {
      id: uuidv4(),
      text: "",
      size: 40,
      cssText: "",
    };
    setLables([...labels, newLable]);
  }, [labels]);

  return (
    <div className="App">
      <div className="menu">
        <div className="m-4 p-2 bg-white absolute right-0 top-0 border border-blue-500 text-white w-96 shadow-lg z-50">
          <div className="m-0 p-1" style={{ borderBottom: "blue 1px solid" }}>
            <h1 className="font-bold text-xl text-blue-600">推しボード メニュー</h1>
          </div>
          <div className="p-4 ">
            <Button variant="outlined" color="primary" onClick={handleNew}>
              New
            </Button>
          </div>
          <div>
            <ul className="divide-y">
              {labels.map(label => <LabelEditor label={label} updateText={updateText} />)}
            </ul>
          </div>
        </div>
      </div>
      {/* ------------ */}
      <div>
        {labels.map(label => <Sprite label={label} />)}
      </div>
    </div >
  );
}

export default App;
