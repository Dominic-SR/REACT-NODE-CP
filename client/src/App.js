import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Auth from './pages/Authentication/Auth'

function App() {
  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Auth/>}/>
        <Route path="auth" element={<Auth/>}/>
      </Routes>
    </Router>
  );
}

export default App;
