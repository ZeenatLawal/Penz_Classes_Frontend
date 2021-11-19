import React, { useState } from 'react';
import '../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Drop from '../components/Dropdown';
import { reserve } from '../redux/reservations/Reservations';

const ReserveForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const [courseId, setCourse] = useState(0);
  const [validated, setValidated] = useState(false);
  const user = useSelector((state) => state.authReducer.user.user_id);

  const onDateChange = (e) => setDate((e.target.value));
  const onCourseChange = (value) => setCourse(value);

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
    <Container className="pt-5 text-center d-flex flex-column align-items-center">
      <h2 className="text-center mb-4">Reserve a spot in one of our courses</h2>
      <Form onSubmit={handleSubmit} noValidate validated={validated} className="form-width d-flex flex-column align-items-center">
        <Form.Label>Select a start date for your course</Form.Label>
        <Form.Control type="date" onChange={onDateChange} className="mb-4 rounded-pill" required />

        <Form.Label>Select a course</Form.Label>
        <Drop onChange={onCourseChange} />

        <Button type="submit" className="button rounded-pill">Reserve</Button>
      </Form>
    </Container>
  );
};

export default ReserveForm;
