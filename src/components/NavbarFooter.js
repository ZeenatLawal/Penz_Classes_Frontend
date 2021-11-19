import React from 'react';
import {
  FaTwitter, FaFacebookF, FaGooglePlusG,
  FaPinterestP, FaVimeoV,
} from 'react-icons/fa';

const NavbarFooter = () => (
  <div>
    <ul className="d-flex justify-content-between">
      <li><FaTwitter /></li>
      <li><FaFacebookF /></li>
      <li><FaGooglePlusG /></li>
      <li><FaVimeoV /></li>
      <li><FaPinterestP /></li>
    </ul>
    <p className="copy">© 2021 PENZ-Classes </p>
  </div>
);

export default NavbarFooter;
