import React from 'react';
import logo from './logo.svg';
import './App.css';
import QrCode from './components/QrCode';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <QrCode />
    </div>
  );
}

export default App;
