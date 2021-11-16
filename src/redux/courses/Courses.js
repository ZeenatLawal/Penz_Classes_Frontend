import getCourses from '../../Api';

const GET_COURSES = 'penz_classes_frontend/courses/GET_COURSES';

const initialState = [];

export const loadCourses = () => async (dispatch) => {
  const getResult = await getCourses();
  const courses = getResult.map((course) => ({
    id: course.id,
    title: course.title,
    instructor: course.instructor_name,
  }));

  if (courses) {
    dispatch({
      type: GET_COURSES,
      payload: courses,
    });
  }
};

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
