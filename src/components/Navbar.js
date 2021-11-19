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
    <div className="w-25 p-2 border-end d-flex flex-column justify-content-between align-items-center nav">
      <nav>
        <h3 className="pb-5 pt-3 title">PENZ-Classes</h3>
        {userLogoutInfo.isLoggedIn ? (
          <div>
            <ul>
              <li><NavLink activeClassName="active" to="/courses">Courses</NavLink></li>
              <li><NavLink activeClassName="active" to="/reserve">Reserve Form</NavLink></li>
              <li><NavLink activeClassName="active" to="/reservations">My Reservations</NavLink></li>
              <li><NavLink activeClassName="active" to="/create-course">Create a Course</NavLink></li>
              <li><NavLink activeClassName="active" to="/delete-courses">Delete Courses</NavLink></li>
              <li><NavLink to="/" onClick={handleChange}>Logout</NavLink></li>
            </ul>
          </div>
        ) : (
          <ul>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
          </ul>
        )}
      </nav>
      <NavbarFooter />
    </div>
  );
};

export default Navbar;
