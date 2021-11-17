import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCourses } from '../redux/courses/Courses';

const DeleteCourse = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <div>
      {courses && courses.map((course) => (
        <p value={course.id} key={course.id}>
          {' '}
          {course.title}
          {' '}
          by
          {' '}
          {course.instructor}
          {' '}
        </p>
      ))}
    </div>
  );
};

export default DeleteCourse;
