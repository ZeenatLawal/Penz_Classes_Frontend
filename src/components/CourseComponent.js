import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseComponent = ({ course }) => (
  <div key={course.id}>
    <div className="d-flex">
      <div className="d-flex flex-column p-2">
        <Link to={`/courses/${course.id}`}>
          {' '}
          <img src={course.image} alt="course photos" />
          {' '}
        </Link>
        <hr className="w-50 mx-auto" />
        <h6 className="text-center">{course.title}</h6>
        <small className="text-break description">{course.description}</small>
        <div className="d-flex p-3 justify-content-evenly social">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </div>
  </div>
);

CourseComponent.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    instructor: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default CourseComponent;
