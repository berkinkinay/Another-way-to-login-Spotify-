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


/*



import React, { useEffect } from 'react'
import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import Login from './components/New/Login';
import Home from './components/New/Home';


export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);
  return <div>
            {
            token ?
                <Home /> : <Login />
            }
           </div>;
*/