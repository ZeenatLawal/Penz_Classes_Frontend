const url = 'http://localhost:3000/api/v1/courses';

const getCourses = async () => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

const fetchReserveCourses = async () => {
  const url = 'http://localhost:3000/api/v1/reservations';
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
const reserveCourse = async (course) => {
  const request = await fetch('http://localhost:3000/api/v1/reservations', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: course.user,
      course_id: course.courseId,
      start_date: course.date,
    }),
  });

  const result = await request.json();
  let message = '';
  if (request.status === 201) {
    message = result.success;
  } else {
    message = result.error;
  }
  return message;
};
export { getCourses, reserveCourse, fetchReserveCourses };


