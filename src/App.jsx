import React from 'react';
import Sidebar from './components/Sidebar';
import SectionIntro from './components/SectionIntro';
import SectionSkills from './components/SectionSkills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  return (
    <div className="bg-dark text-white min-vh-100">
      <Sidebar />
      <div>
        <SectionIntro />
        <SectionSkills />
      </div>
    </div>
  );
}

export default App;
