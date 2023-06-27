import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import "./components/NavBar.css"

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/"/>
          <Route path="/cart"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
