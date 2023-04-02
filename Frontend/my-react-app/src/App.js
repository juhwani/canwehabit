import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profilepage from "./ProfilePage/profilepage.js"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path="/profilepage" element={<Profilepage/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

