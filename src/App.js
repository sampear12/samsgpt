import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Education from './components/Education';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Entrepreneurship from './components/Entre';
import ExtraCurriculars from './components/ExtraCurriculars';
import Projects from './components/Projects';
import Links from './components/Links';
import Intro from './components/intro';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Intro />} /> {/* Default route */}
          <Route path="/intro" element={<Intro />} />
          <Route path="/profile" element={<MainContent />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/extra-curriculars" element={<ExtraCurriculars />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
