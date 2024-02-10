import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Auth from './pages/Authentication/Auth'
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Auth/>}/>
        <Route path="/" element={<Auth/>}/>
        <Route path="/home" element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
