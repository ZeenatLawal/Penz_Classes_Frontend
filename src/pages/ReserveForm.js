import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import Drop from '../components/Dropdown';
import { reserve } from '../redux/reservations/Reservations';

const ReserveForm = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState('');
  const [courseId, setCourse] = useState(0);

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
    e.preventDefault();
    setDate('');
    setCourse('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <h2>Reserve a spot in one of our courses</h2>
        <input type="date" onChange={onDateChange} />
        <Drop onChange={onCourseChange} />
        <button type="submit">Reserve</button>
      </Form>
    </div>
  );
};

export default ReserveForm;
