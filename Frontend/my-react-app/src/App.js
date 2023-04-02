import './App.css';
import React from "react";
import Home from "./pages/home/home.js"
import Mypage from "./pages/mypage/mypage.js"
import Challenges2 from "./pages/challenges2/challenges2"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/challenges2" element={<Challenges2/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
