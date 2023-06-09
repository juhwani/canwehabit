import React from 'react';
import './App.css';
import Home from "./pages/home/home.js"
import Mypage from "./pages/mypage/mypage.js"
import Challenges2 from "./pages/challenges2/challenges2"
import Add from "./pages/add/add.js"
import Goals from "./pages/goals/goals.js"
import Goal from "./pages/goal/goal"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/challenges2" element={<Challenges2/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/goals" element ={<Goals/>}/>
        <Route path="/goal" element = {<Goal/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

