import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <main>
          
        </main>
      </div>
    </Router>
  );
}

export default App