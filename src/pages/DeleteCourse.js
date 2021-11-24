import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import { loadCourses } from '../redux/courses/Courses';
import DeleteButton from '../components/DeleteButton';

const DeleteCourse = () => {
  const courses = useSelector((state) => state.coursesReducer.courses);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCourses());
  }, [dispatch]);

  return (
    <Container className="pt-5">
      <h2 className="text-center mb-4 page-title">Delete Courses</h2>
      <Table striped bordered>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Course Instructor</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {courses && courses.map((course) => (
            <DeleteButton
              key={course.id}
              course={course}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default DeleteCourse;
