import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import ProjectsShowcase from './pages/ProjectsShowcase';
import './App.css';
import './App.css'
import Skills from './pages/Skills';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<ProjectsShowcase />} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
    </Router>
  );
}

export default App;
