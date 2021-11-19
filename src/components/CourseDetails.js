import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const { courseId } = useParams();
  console.log(courseId);
  return (
    <div>
      <h1>CourseDetails</h1>
    </div>
  );
};

export default CourseDetails;
