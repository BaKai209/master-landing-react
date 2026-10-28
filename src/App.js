import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/features/Features';
import Analytics from './components/Analitytics/Analytics';
import Infrastructure from './components/Infrastructure/Infrastructure';
import RestaurantMenu from './components/RestauranteMenu';
import BookingModule from './components/BookingModule';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features/>
      <Analytics />
      <Infrastructure />
      <RestaurantMenu />
      <BookingModule />

    </div>
  );
}

export default App;
