import React, { FC } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ToDo from './components/ToDo';
import ToDoCard from './components/ToDoCard';

const App: FC = () => {
  return (
    <div className="App">
      <Header />
      <Footer />
      <ToDo />

    </div>
  );
}

export default App;
