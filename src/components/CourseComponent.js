/* eslint-disable */
import React from 'react';
import { useDispatch } from 'react-redux';

const CourseComponent = ({course}) => {
  const dispatch = useDispatch();
  return (
    <div key={course.id}>
      {course.title}
      {course.instructor},
      {course.description},
      {/* {course.image.image} */}
    </div>
  );
};

// CourseComponent.propTypes = {
//     course: PropTypes.shape({
//       id: PropTypes.number,
//       title: PropTypes.string,
//       instructor: PropTypes.string,
//     }).isRequired,
//   };

export default CourseComponent;
