import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarFooter from './NavbarFooter';

const Navbar = () => (
  <div className="w-25 p-2 border-end d-flex flex-column justify-content-between align-items-center nav">
    <nav>
      <h3 className="pb-5 pt-3 title">PENZ-Classes</h3>
      <ul>
        <li><NavLink activeClassName="active" to="/courses">Courses</NavLink></li>
        <li><NavLink activeClassName="active" to="/reserve">Reserve Form</NavLink></li>
        <li><NavLink activeClassName="active" to="/reservations">My Reservations</NavLink></li>
        <li><NavLink activeClassName="active" to="/create-course">Create a Course</NavLink></li>
        <li><NavLink activeClassName="active" to="/delete-courses">Delete Courses</NavLink></li>
      </ul>
    </nav>
    <NavbarFooter />
  </div>
);

export default Navbar;
