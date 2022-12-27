import React from 'react';

import  './css/Nav.css'

import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom'

// function Nav() {
//   return (
//     <nav>
      
//       <NavLink to="/">Home</NavLink>
//       <NavLink to="/projects">Projects</NavLink>
//       <NavLink to="/about">About</NavLink>
//       <NavLink to="/contact">Contact</NavLink>
//     </nav>
//   )
// }



const Nav = () => {
  return (
    <div className='nav'>
      <h2 className='brand-name'>Brand</h2>

      <div className="nav-menu">
         <div className="nav-item"><Link to="/">Home</Link></div>
         <div className="nav-item"><Link to="/projects">Projects</Link></div>
         <div className="nav-item"><Link to="/about">About</Link></div>
         <div className="nav-item"><Link to="">Contact</Link></div>

      </div>

      

    </div>
  );
};

export default Nav;
