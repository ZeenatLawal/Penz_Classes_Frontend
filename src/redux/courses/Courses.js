import { getCourses, deleteCourse } from '../../Api';

const GET_COURSES = 'penz_classes_frontend/courses/GET_COURSES';
const DELETE_COURSE = 'penz_classes_frontend/courses/DELETE_COURSE';
const SELECTED_COURSE = 'penz_classes_frontend/courses/SELECTED_COURSE';

const initialState = [];

export const loadCourses = () => async (dispatch) => {
  const getResult = await getCourses();
  const courses = getResult.map((course) => ({
    id: course.id,
    title: course.title,
    instructor: course.instructor_name,
    description: course.description,
    image: course.image,
  }));

  if (courses) {
    dispatch({
      type: GET_COURSES,
      payload: courses,
    });
  }
};

export const removeCourse = (course) => async (dispatch) => {
  const deleted = await deleteCourse(course);
  const courses = deleted.map((course) => ({
    id: course.id,
    title: course.title,
    instructor: course.instructor_name,
  }));

  if (courses) {
    dispatch({
      type: DELETE_COURSE,
      payload: courses,
    });
  }
};

export const selectedCourse = (payload) => ({
  type: SELECTED_COURSE,
  payload,
});

const coursesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return {
        ...state,
        courses: action.payload,
      };
    case DELETE_COURSE:
      return {
        ...state,
        courses: action.payload,
      };
    case SELECTED_COURSE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default coursesReducer;
