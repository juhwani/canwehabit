import React from 'react';
import './App.css';
import Home from "./pages/home/home.js"
import Mypage from "./pages/mypage/mypage.js"
import Add from "./pages/add/add.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/add" element={<Add/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
