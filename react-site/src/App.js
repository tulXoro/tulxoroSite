import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navibar from './components/Navibar';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

import './style/Global.css'

function App() {

  return (
    <div className="App">

      <Router>
      <Navibar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
