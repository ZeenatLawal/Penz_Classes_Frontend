/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from 'react-bootstrap/Carousel';
import { CardGroup } from 'react-bootstrap';
import { loadCourses } from '../redux/courses/Courses';
import CourseComponent from './CourseComponent';

const CourseListing = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);
  // const state = courses.sort(() => 0.5 - Math.random());

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="align-middle">
      {courses && courses.map((course) => (
            <CourseComponent
              key={course.id}
              course={course}
            />
          ))}
      </div>
    // </div>
  );
};

export default CourseListing;
