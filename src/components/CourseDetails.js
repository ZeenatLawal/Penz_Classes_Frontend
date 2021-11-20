import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, Modal, Form, Row, Col, Table,
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
    const res = await axios.get(`http://localhost:3000/api/v1/courses/${courseId}`);
    dispatch(selectedCourse(res.data));
  };

  const handleReservation = () => {
    const reservationInfo = {
      user,
      courseId: id,
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
    <div className="p-3 w-100">
      <Row>
        <Col sm={12} md={8} className="course-details-img d-flex justify-content-center align-items-center"><div><img src={image} alt="" /></div></Col>
        <Col sm={12} md={4} className="mt-5">
          <div className="course-details-title text-uppercase fs-4 text-right font-weight-bold">{title}</div>
          <p className="font-italic fs-6 text-right mb-4">Reserve Now!!!</p>
          <div>
            <Table responsive="sm" striped bordered hover>
              <tbody>
                <tr>
                  <td className="py-3">CourseCode:</td>
                  <td className="text-right py-3">{`${id}001`}</td>
                </tr>
                <tr>
                  <td className="py-3">Instructor:</td>
                  <td className="text-right py-3">{instructorName}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div className="text-right details-btn">
            <Button className="button rounded-pill" type="button" onClick={() => setSmShow(true)}>Reserve</Button>
          </div>
        </Col>
      </Row>

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
