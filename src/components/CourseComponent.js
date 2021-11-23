import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CourseComponent = ({ course }) => (
  <div key={course.id}>
    <div className="d-flex pt-5">
      <div className="d-flex flex-column p-2">
        <Link to={`/courses/${course.id}`}>
          {' '}
          <img src={course.image} alt="course slides" />
          {' '}
        </Link>
        <hr className="w-50 mx-auto" />
        <h5 className="text-center">{course.title}</h5>
        <p className="w-100 text-break description">{course.description}</p>
        <div className="d-flex p-3 justify-content-evenly">
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
