/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCourses } from '../redux/courses/Courses'

const CourseListing = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);
  console.log(courses);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);
  return (
    <div>
      <h1>CourseListing</h1>
    </div>
  );
};

export default CourseListing;
