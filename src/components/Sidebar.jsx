import React from 'react';

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 text-white bg-dark vh-100 position-fixed" style={{ width: '240px' }}>
      <h2 className="fs-3">재형 포트폴리오</h2>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#intro" className="nav-link text-white">Home</a>
        </li>
        <li>
          <a href="#projects" className="nav-link text-white">Projects</a>
        </li>
        <li>
          <a href="#contact" className="nav-link text-white">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
