import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Modal, Form, ListGroup, Row, Col, Container,
} from 'react-bootstrap';
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
    const res = await axios.get(`https://penz-classes-backend.herokuapp.com/api/v1/courses/${courseId}`);
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
    <Container className="details-page">
      <Row className="h-100" key={id}>
        <Col xs={12} md={8} className="d-flex justify-content-center align-items-center"><img src={image} alt="" className="rounded details-img" /></Col>
        <Col xs={12} md={4} className="mt-5">
          <div className="page-title mt-5 fw-bold text-uppercase fs-4 text-right">{title}</div>
          <p className="font-italic fs-6 text-right mb-4">Reserve Now!!!</p>
          <ListGroup>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto fw-bold">Course Code:</div>
              <div>{`${id}001`}</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto fw-bold">Instructor:</div>
              <div>{instructorName}</div>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto fw-bold">Status:</div>
              <div>Available on reservation</div>
            </ListGroup.Item>
          </ListGroup>
          <div className="text-right">
            <Button className="button details-reserve-btn rounded-pill" type="button" onClick={() => setSmShow(true)}>Reserve</Button>
          </div>
        </Col>
      </Row>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
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
    </Container>
  );
};

export default CourseDetails;
