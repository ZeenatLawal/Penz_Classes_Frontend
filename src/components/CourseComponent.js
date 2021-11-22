/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseComponent = ({course}) => {
  const dispatch = useDispatch();
  return (
    <div className="container">
        <div className="w-25" key={course.id}>
          <Link to={`/courses/${course.id}`}>
            <img className="w-100" src={course.image}/>
          </Link>
          <h4 className="text-center">{course.title}</h4>
          <hr className="w-50 mx-auto" />
            <p className="text-break">{course.description}</p>
          <div className="p-2 d-flex justify-content-evenly">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
    </div>
  );
};

CourseComponent.propTypes = {
    course: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      instructor: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
};

export default CourseComponent;
