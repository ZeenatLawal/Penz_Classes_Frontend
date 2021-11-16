import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { loadCourses } from '../redux/courses/Courses';

const Drop = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <Form.Select aria-label="Default select example">
      <option>Select a Course</option>
      {courses && courses.map((course) => (
        <option value={course.title} key={course.id}>
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
