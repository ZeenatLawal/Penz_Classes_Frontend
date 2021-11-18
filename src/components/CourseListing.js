/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCourses } from '../redux/courses/Courses'
import CourseComponent from './CourseComponent';

const CourseListing = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <div>
      {courses && courses.map((course) => (
            <CourseComponent
              key={course.id}
              course={course}
            />
          ))}
    </div>
  );
};

export default CourseListing;
