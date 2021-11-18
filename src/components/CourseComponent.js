/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const CourseComponent = ({course}) => {
  const dispatch = useDispatch();
  return (
    <div key={course.id}>
      <h2>{course.title}</h2>
      <h3>{course.instructor}</h3>
      <p>{course.description}</p>
      <img src={course.image}/>
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
