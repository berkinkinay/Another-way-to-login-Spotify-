import React from 'react'
import { Router, Routes, Route, useLocation } from 'react-router-dom';
//pages
import Login from './components/Login/Login';
import Soundon from './components/Home/Soundon';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Login />} />
        <Route path="/soundon" element={<Soundon />} />
      </Routes>
    </>
  );
}

export default App;
