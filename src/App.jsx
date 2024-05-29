import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import './styles.css';
import Home from './components/Home';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <MainContent />
        {/* <Home /> */}
      </div>
    </div>
  );
}

export default App;
