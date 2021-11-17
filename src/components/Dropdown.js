/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { loadCourses } from '../redux/courses/Courses';

const Drop = ({ onChange }) => {
  const courses = useSelector((state) => state.coursesReducer.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <Form.Select aria-label="Select a Course" onChange={(e) => onChange(e.target.value)} required>
      <option value="">Select a Course</option>
      {courses && courses.map((course) => (
        <option value={course.id} key={course.id}>
          {' '}
          {course.title}
          {' '}
          by
          {' '}
          {course.instructor}
          {' '}
        </option>
      ))}
    </Form.Select>
  );
};

export default Drop;
