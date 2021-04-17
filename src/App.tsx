import React from 'react';
import './App.css';
import { Sprite } from './components/Sprite';

function App() {
  return (
    <div className="App">
      <div className="menu">
        <div className="m-4 p-2 absolute right-0 top-0 bg-blue-500 text-white w-96 shadow z-50">
          <div className="mt-0 mb-2" style={{ borderBottom: "#fff 1px solid" }}>
            <h1 className="font-bold text-xl">推しボード メニュー</h1>
          </div>
        </div>
      </div>
      {/* ------------ */}
      <Sprite id={1} text={"こんにちは"} size={40}></Sprite>
      <Sprite id={2} text={"ミーグリ初参加です"} size={50}></Sprite>
      <Sprite id={3} text={"あやちぇりポーズしてください"} size={70}></Sprite>
    </div >
  );
}

export default App;
