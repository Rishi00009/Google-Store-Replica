// src/App.js

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import WatchesAndTrackers from './components/Wearables/WatchesandTrackers';


function App() {
  return (
    <div className="App">
      <Header />
      <WatchesAndTrackers />
      <Footer />
    </div>
  );
}

export default App;