import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDo from './components/ToDo';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <ToDo />

    </div>
  );
}

export default App;
