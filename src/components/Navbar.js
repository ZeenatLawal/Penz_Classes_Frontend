import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavbarFooter from './NavbarFooter';
import { LogoutAuthAction } from '../redux/users/actions/AuthAction';

const Navpanel = () => {
  const userInfo = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(LogoutAuthAction());
  };
  return (
    <Navbar collapseOnSelect expand="md" bg="light" className="">
      <Container className="flex-md-column">
        <Navbar.Brand className="title mb-md-5 mx-md-5">PENZ-Classes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="flex-column">
          <Nav className="me-auto align-items-center mb-md-5">
            {userInfo.isLoggedIn ? (
              <div>
                <ul>
                  <li>
                    <NavLink to="/" className="title text-uppercase">
                      {userInfo.user.username}
                    </NavLink>
                  </li>
                  <li><NavLink activeclassname="active" to="/courses">Courses</NavLink></li>
                  <li><NavLink activeclassname="active" to="/reserve">Reserve Form</NavLink></li>
                  <li><NavLink activeclassname="active" to="/myreservations">My Reservations</NavLink></li>
                  <li><NavLink activeclassname="active" to="/create-course">Create a Course</NavLink></li>
                  <li><NavLink activeclassname="active" to="/delete-courses">Delete Courses</NavLink></li>
                  <li><NavLink activeclassname="active" to="/" onClick={handleChange}>Logout</NavLink></li>
                </ul>
              </div>
            ) : (
              <ul>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/signup">Signup</NavLink></li>
              </ul>
            )}
          </Nav>
          <Nav className="d-none d-md-block align-self-stretch footer">
            <NavbarFooter />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navpanel;
