import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>PENZ-Classes</h1>
    <nav>
      <ul>
        <li><NavLink to="/courses">Courses</NavLink></li>
        <li><NavLink to="/reserve">Reserve Form</NavLink></li>
        <li><NavLink to="/reservations">My Reservations</NavLink></li>
        <li><NavLink to="/create-course">Create a Course</NavLink></li>
        <li><NavLink to="/delete-courses">Delete Courses</NavLink></li>
      </ul>
    </nav>
    <div>
      <ul>
        <li>twitter</li>
        <li>facebook</li>
        <li>google</li>
        <li>PENZ</li>
        <li>pinterest</li>
        <p>© 2021 PENZ-Classes </p>
      </ul>
    </div>
  </div>
);

export default Navbar;
