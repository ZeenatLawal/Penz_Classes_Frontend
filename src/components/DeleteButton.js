import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const DeleteButton = ({ course }) => (
  <tr key={course.id}>
    <td className="col-5">{course.title}</td>
    <td className="col-5">{course.instructor}</td>
    <td>
      <Button variant="outline-danger" size="sm">Delete Course</Button>
    </td>
  </tr>
);

DeleteButton.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    instructor: PropTypes.string,
  }).isRequired,
};

export default DeleteButton;
