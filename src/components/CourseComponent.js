/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseComponent = ({course}) => {
  const dispatch = useDispatch();
  return (
    <div key={course.id}>
      <h4>{course.title}</h4>
      <h6>{course.instructor}</h6>
      <p>{course.description}</p>
      <Link to={`/courses/${course.id}`}>
        <img src={course.image}/>
      </Link>
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
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
