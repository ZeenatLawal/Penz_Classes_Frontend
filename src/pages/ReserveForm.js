import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Drop from '../components/Dropdown';
import { reserve } from '../redux/reservations/Reservations';

const ReserveForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const [courseId, setCourse] = useState(0);
  const [validated, setValidated] = useState(false);

  const onDateChange = (e) => setDate((e.target.value));
  const onCourseChange = (value) => setCourse(value);

  const user = 5;
  const handleSubmit = (e) => {
    const course = {
      user,
      date,
      courseId,
    };
    dispatch(reserve(course));
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      e.preventDefault();
    }
    setValidated(true);
    setDate();
    setCourse(0);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit} noValidate validated={validated}>
        <h2>Reserve a spot in one of our courses</h2>
        <Form.Label>Select a start date for your course</Form.Label>
        <Form.Control type="date" onChange={onDateChange} required />
        <Form.Label>Select a course</Form.Label>
        <Drop onChange={onCourseChange} />
        <Button type="submit">Reserve</Button>
      </Form>
    </div>
  );
};

export default ReserveForm;
