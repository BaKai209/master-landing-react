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
import DrivingSchoolModule from './components/DrivingSchoolModule';

function App() {

  // Detecta Si el enlace Viene con ?escuela=
  const isDrivingSchool = new URLSearchParams(window.location.search).has('escuela');


  return (
    <div className="App">
      
      
      {isDrivingSchool ? (<DrivingSchoolModule/>
      ) : (<>
      <Navbar />
      <Hero />
      <Features/>
      <Analytics />
      <Infrastructure />
      <PreCalificadorEstetico />
      <DrivingSchoolModule />
      </>)}
      {/*<CotizadorShowNa />*/}   


      <VercelAnalytics />
    </div>
  );
}

export default App;
