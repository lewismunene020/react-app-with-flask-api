import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to My Architectural Portfolio</h1>
      <p>Here are some of my recent projects:</p>
      <ul>
        <li><Link to="/project1">Project 1</Link></li>
        <li><Link to="/project2">Project 2</Link></li>
        <li><Link to="/project3">Project 3</Link></li>
      </ul>
      <p>For more information, please <Link to="/contact">contact me</Link>.</p>
    </div>
  );
};

export default LandingPage;
