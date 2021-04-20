import { Button } from '@material-ui/core';
import { PlusOneOutlined } from '@material-ui/icons';
import React, { useCallback, useState } from 'react';
import './App.css';
import { LabelEditor } from './components/LabelEditor';
import { Sprite } from './components/Sprite';
import { StyleEditor } from './components/StyleEditor';
import { TextLabel } from './models/TextLabel';
import { onClickStop } from './util';


function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}


function App() {
  const [labels, setLables] = useState<TextLabel[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(true);

  const updateText = useCallback((id: string, newText: string) => {
    setLables(labels.map((label) => {
      if (label.id === id) {
        return { ...label, text: newText };
      } else {
        return label;
      }
    }));
  }, [labels]);

  const updateSize = useCallback((id: string, newSize: number) => {
    setLables(labels.map((label) => {
      if (label.id === id) {
        return { ...label, size: newSize };
      } else {
        return label;
      }
    }));
  }, [labels]);

  const updateFont = useCallback((id: string, newFont: string) => {
    setLables(labels.map((label) => {
      if (label.id === id) {
        return { ...label, font: newFont };
      } else {
        return label;
      }
    }));
  }, [labels]);

  const updateColor = useCallback((id: string, newColor: string) => {
    setLables(labels.map((label) => {
      if (label.id === id) {
        return { ...label, color: newColor };
      } else {
        return label;
      }
    }));
  }, [labels]);

  const handleNew = useCallback(() => {
    const newLable: TextLabel = {
      id: uuidv4(),
      text: "",
      size: 60,
      font: "'Noto Sans JP', sans-serif",
      cssText: "",
      color: "#000000",
    };
    setLables([...labels, newLable]);
  }, [labels]);

  const handleSelect = useCallback((id: string | null) => {
    setSelectedId(id);
  }, [labels]);

  const handleDelete = useCallback((id: string) => {
    setLables(labels.filter(label => label.id != id));
  }, [labels]);

  const resetSelection = useCallback(() => {
    setSelectedId(null);
  }, []);

  const selectedLabel = labels.find(label => label.id === selectedId) || null;

  return (
    <div className="App" onClick={resetSelection} style={{ background: "#ffffff", width: "100%", height: "100%" }}>
      <div onClick={onClickStop}>
        {menuOpen ?
          <div className="menu">
            <div style={{ height: "90%" }} className="bg-opacity-80 m-4 p-2 bg-white absolute right-0 top-0 border border-blue-500 text-white w-96 shadow-lg z-50">
              <div className="flex flex-col h-full">
                <div className="m-0 p-1" style={{ borderBottom: "blue 1px solid" }}>
                  <h1 className="text-center font-bold text-xl text-blue-600">推しボード メニュー</h1>
                </div>

                <div className="flex-none m-2 select-none">
                  <p className="text-sm text-gray-500 font-bold">
                    <span>編集</span>
                  </p>
                  <StyleEditor selectedLabel={selectedLabel} updateSize={updateSize} updateFont={updateFont} updateColor={updateColor} />
                </div>

                <div className="flex-none select-none">
                  <p className="text-xs text-gray-500 font-bold">
                    <span>テキスト</span>
                  </p>
                  <div className="p-2 flex-grow-0 text-center">
                    <Button variant="contained" color="primary" onClick={handleNew}>
                      <span>New</span>
                    </Button>
                  </div>
                </div>

                <div className="flex-grow overflow-auto">
                  <ul className="space-y-2">
                    {labels.map(label => <LabelEditor label={label}
                      updateText={updateText}
                      handleSelect={handleSelect}
                      selectedLabel={selectedLabel}
                      handleDelete={handleDelete} />)}
                  </ul>
                </div>

              </div>
            </div>
          </div>
          :
          <div>メニューを開く</div>
        }
        {/* ------------ */}
        <div>
          {labels.map(label => <Sprite label={label} handleSelect={handleSelect} selectedLabel={selectedLabel} />)}
        </div>
      </div>
    </div >
  );
}

export default App;
