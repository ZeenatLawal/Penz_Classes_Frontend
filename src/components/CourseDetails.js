import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal, Form } from 'react-bootstrap';
import { selectedCourse } from '../redux/courses/Courses';
import { reserve } from '../redux/reservations/Reservations';

const CourseDetails = () => {
  const courses = useSelector((state) => state.coursesReducer);
  const user = useSelector((state) => state.authReducer.user.user_id);
  const [smShow, setSmShow] = useState(false);
  const [date, setDate] = useState();
  const dispatch = useDispatch();
  const { courseId } = useParams();

  const {
    id, title, instructor_name: instructorName, image,
  } = courses;

  const fetchSelectedCourse = async () => {
    const res = await axios.get(`http://localhost:3000/api/v1/courses/${courseId}`);
    dispatch(selectedCourse(res.data));
  };

  const handleReservation = () => {
    const reservationInfo = {
      user,
      courseId: courses.id,
      date,
    };
    dispatch(reserve(reservationInfo));
  };

  useEffect(() => {
    if (courseId && courseId !== '') {
      fetchSelectedCourse();
    }
  }, [courseId]);

  return (
    <div className="container">
      <div key={id}>
        <div><img src={image} alt="" /></div>
        <div>{title}</div>
        <div>{instructorName}</div>
      </div>
      <Button className="button" type="button" onClick={() => setSmShow(true)}>Reserve</Button>
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Select a start date
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleReservation}>
            <Form.Control type="date" onChange={(e) => setDate(e.target.value)} className="mb-4" />
            <Button type="submit" className="button">Reserve</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default CourseDetails;
