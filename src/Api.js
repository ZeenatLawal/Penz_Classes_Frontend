const url = 'http://localhost:3000/api/v1/courses';

const getCourses = async () => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

const reserveCourse = async (course) => {
  const result = await fetch('http://localhost:3000/api/v1/reservations', {
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

  return result.status === 201;
};

export { getCourses, reserveCourse };
