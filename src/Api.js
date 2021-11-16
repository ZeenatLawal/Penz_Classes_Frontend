const getCourses = async () => {
  const request = await fetch('http://localhost:3000/api/v1/courses');
  const result = await request.json();
  return result;
};

export default getCourses;
