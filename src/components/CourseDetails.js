import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCourse } from '../redux/courses/Courses';
import { reserve } from '../redux/reservations/Reservations';

const CourseDetails = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const courses = useSelector((state) => state.coursesReducer);
  const user = useSelector((state) => state.authReducer.user.user_id);

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
      date: '11-2-2021',
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
      <button className="btn btn-secondary" type="button" onClick={handleReservation}>Reserve</button>
    </div>
  );
};

export default CourseDetails;
