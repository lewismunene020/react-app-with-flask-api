import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const NavBar = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Send data to Flask API using fetch or axios
  }

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="title" ref={register} />
            <input type="file" name="image" ref={register} />
            <button type="submit">Upload</button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
