import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/features/Features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features/>
    </div>
  );
}

export default App;
