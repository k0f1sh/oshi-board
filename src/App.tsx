import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import { Sprite } from './components/Sprite';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="menu">
          <div className="m-4 p-2 absolute right-0 top-0 bg-blue-500 text-white w-96 shadow">
            <div className="mt-0 mb-2" style={{ borderBottom: "#fff 1px solid" }}>
              <h1 className="font-bold text-xl">推しボード メニュー</h1>
            </div>
          </div>
        </div>
        {/* ------------ */}
        <Sprite id={1} text={"あやちぇり！！！！"} size={30}></Sprite>
      </div >
    </DndProvider>
  );
}

export default App;
