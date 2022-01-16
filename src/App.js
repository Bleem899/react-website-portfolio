import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import ThisIsMe from './components/pages/ThisIsMe';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/react-website-portfolio' element={<Home/>}/>
          <Route path='/about'  element={<About/>}/>
          <Route path='/projects'  element={<Projects/>}/>
          <Route path='/this-is-me'  element={<ThisIsMe/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
