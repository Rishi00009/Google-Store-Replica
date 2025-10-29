// src/App.js
import React from 'react';
import './App.css';
import Header from './components/Header';
import Fitbit from './components/Fitbit';
import Wearables from './components/Wearables';
import Hero from './components/Hero';
import Arrivals from './components/Arrivals';
import Compare from './components/Compare';
import Footer from './components/Footer';
import Watch4 from './components/Watch4';


function App() {
  return (
    <div className="App">
      <Header />
      <Fitbit />
      <Hero />
      <Wearables />
      <Arrivals />
      <Compare />
      <Watch4 />
      <Footer />
    </div>
  );
}

export default App;