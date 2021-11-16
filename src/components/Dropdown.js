import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { loadCourses } from '../redux/courses/Courses';

const Drop = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <Dropdown>
      <Dropdown.Toggle>
        Select Course
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {courses && courses.map((course) => (
          <Dropdown.Item eventKey={course.title} key={course.id}>
            {' '}
            {course.title}
            {' '}
            by
            {' '}
            {course.instructor}
            {' '}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Drop;
