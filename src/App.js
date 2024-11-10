// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Exercises from './components/Exercises';  // Workouts component
import FitGPT from './components/FitGPT';  // FitGPT component

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/fitgpt" element={<FitGPT />} />
          <Route path="/workouts" element={<Exercises />} />  {/* This now shows the exercises */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
