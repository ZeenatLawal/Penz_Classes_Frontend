import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { removeCourse } from '../redux/courses/Courses';

const DeleteButton = ({ course }) => {
  const dispatch = useDispatch();

  const remove = (id) => {
    dispatch(removeCourse(id));
  };

  return (
    <tr key={course.id}>
      <td className="col-5">{course.title}</td>
      <td className="col-5">{course.instructor}</td>
      <td>
        <Button variant="outline-danger" size="sm" onClick={() => remove(course.id)}>Delete</Button>
      </td>
    </tr>
  );
};

DeleteButton.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    instructor: PropTypes.string,
  }).isRequired,
};

export default DeleteButton;
