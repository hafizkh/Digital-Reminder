import React, { FC } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDo from './components/ToDo';

const App: FC = () => {

  return (
    <div className="app-container">
      <Header />
      <Footer />
      <ToDo />

    </div>
  );
}

export default App;
