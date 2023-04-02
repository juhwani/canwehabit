import './App.css';
import React from "react";
import Home from "./pages/home/home.js"
import Mypage from "./pages/mypage/mypage.js"
import Goal from "./pages/goal/goal"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/goal" element = {<Goal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
