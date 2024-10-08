import React from 'react';
import logo from './logo.svg';
import './App.css';
import QrCode from './components/QrCode';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFOund from './components/PageNotFound';
import HowToUse from './components/HowToUse';
import AboutDEveloper from './components/AboutDeveloper';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<QrCode />} />
          <Route path="/HowToUse" element={<HowToUse />} />
          <Route path="/AboutDeveloper" element={<AboutDEveloper />} />
          <Route path="*" element={<PageNotFOund />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
