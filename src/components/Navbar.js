import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import NavbarFooter from './NavbarFooter';
import { LogoutAuthAction } from '../redux/users/actions/AuthAction';

const Navbar = () => {
  const userLogoutInfo = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(LogoutAuthAction());
  };

  return (
    <div>
      <nav>
        <h1>PENZ-Classes</h1>
        {userLogoutInfo.isLoggedIn ? (
          <div>
            <ul>
              <li><NavLink to="/courses">Courses</NavLink></li>
              <li><NavLink to="/reserve">Reserve Form</NavLink></li>
              <li><NavLink to="/reservations">My Reservations</NavLink></li>
              <li><NavLink to="/create-course">Create a Course</NavLink></li>
              <li><NavLink to="/delete-courses">Delete Courses</NavLink></li>
              <li><NavLink to="/" onClick={handleChange}>Logout</NavLink></li>
              <NavbarFooter />
            </ul>
          </div>
        ) : (
          <ul>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </ul>
        )}
      </nav>

    </div>
  );
};

export default Navbar;
