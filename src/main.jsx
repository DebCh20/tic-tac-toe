import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Singleplayer from './pages/Singleplayer.jsx';
import Multiplayer from './pages/Multiplayer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/single" element={<Singleplayer />} />
        <Route path="/multi" element={<Multiplayer/>} />
      </Routes>
    </BrowserRouter>
)
