import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { selectedCourse } from '../redux/courses/Courses';

const CourseDetails = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.coursesReducer);
  console.log(courses);
  const { courseId } = useParams();

  const fetchSelectedCourse = async () => {
    const res = await axios.get(`http://localhost:3000/api/v1/courses/${courseId}`);
    console.log(res.data);
    dispatch(selectedCourse(res.data));
  };

  useEffect(() => {
    if (courseId && courseId !== '') {
      fetchSelectedCourse();
    }
  }, [courseId]);

  return (
    <div>
      <h1>{courseId}</h1>
    </div>
  );
};

export default CourseDetails;
