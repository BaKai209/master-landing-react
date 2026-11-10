import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/features/Features';
import Analytics from './components/Analitytics/Analytics';
import Infrastructure from './components/Infrastructure/Infrastructure';
import PreCalificadorEstetico from './components/PrecalificadorEstetico';
import CotizadorShowNa from './components/CotizadorExclusive';
import {Analytics as VercelAnalytics} from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features/>
      <Analytics />
      <Infrastructure />
      <PreCalificadorEstetico />
      {/*<CotizadorShowNa />*/}   


       <VercelAnalytics />

    </div>
  );
}

export default App;
