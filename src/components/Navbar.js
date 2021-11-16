import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarFooter from './NavbarFooter';

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
    <NavbarFooter />
  </div>
);

export default Navbar;
