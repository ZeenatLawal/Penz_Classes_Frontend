import { reserveCourse } from '../../Api';

const RESERVE_COURSE = 'penz_classes_frontend/courses/RESERVE_COURSE';
const FETCH_COURSES_STARTED = 'penz_classes_frontend/courses/FETCH_COURSE_STARTED';
const FETCH_COURSES_SUCCEED = 'penz_classes_frontend/courses/FETCH_COURSE_SUCCEED';
const FETCH_COURSES_FAILED = 'penz_classes_frontend/courses/FETCH_COURSE_FAILED';

const initialState = {
  status: 'awaiting',
  message: '',
};

const fetchCoursesStarted = () => ({
  type: FETCH_COURSES_STARTED,
});
export const fetchCoursesSucceed = (payload) => ({
  type: FETCH_COURSES_SUCCEED,
  payload,
});
const fetchCoursesFailed = (payload) => ({
  type: FETCH_COURSES_FAILED,
  payload,
});

export const fetchReserveCourses = () => async (dispatch) => {
  const url = 'http://localhost:3000/v1/reservations';
  dispatch(fetchCoursesStarted());
  await fetch(url)
    .then((response) => response.json())
    .then((json) => dispatch(fetchCoursesSucceed(json)))
    .catch((error) => dispatch(fetchCoursesFailed(error.toString())));
};

export const reserve = (course) => async (dispatch) => {
  const created = await reserveCourse(course);

  if (created) {
    dispatch({
      type: RESERVE_COURSE,
      payload: created,
    });
  }
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_STARTED:
      return {
        ...state,
        status: 'loading',
      };
    case FETCH_COURSES_SUCCEED:
      return {
        message: action.payload.messsage,
        status: 'awaiting',
      };
    case FETCH_COURSES_FAILED:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    case RESERVE_COURSE:
      return {
        ...state,
        reserveMsg: action.payload,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
