import './App.css';
import React from "react";
import Home from "./pages/home/home.js"
import Mypage from "./pages/mypage/mypage.js"
import Goals from "./pages/goals/goals.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/goals" element ={<Goals/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
