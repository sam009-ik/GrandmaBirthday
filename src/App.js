
import HomePage from './homePage';
import Photos from './Photos'; // Assuming the filename is Photos.js
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    // Add the `basename` prop to the Router
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;
