import { reserveCourse, fetchReserveCourses } from '../../Api';

const FETCH_COURSES_SUCCEED = 'penz_classes_frontend/courses/FETCH_COURSE_SUCCEED';
const RESERVE_COURSE = 'penz_classes_frontend/courses/RESERVE_COURSE';

const initialState = [];

export const fetchCoursesSucceed = () => async (dispatch) => {
  const fetched = await fetchReserveCourses();
  const reservations = fetched.map((reservation) => ({
    id: reservation.id,
    user_id: reservation.user_id,
    username: reservation.username,
    course_id: reservation.course_id,
    course: reservation.course,
    image: reservation.image,
    start_date: reservation.start_date,
  }));

  if (reservations) {
    dispatch({
      type: FETCH_COURSES_SUCCEED,
      payload: reservations,
    });
  }
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
    case RESERVE_COURSE:
      return {
        ...state,
        reserveMsg: action.payload,
      };
    case FETCH_COURSES_SUCCEED:
      return {
        ...state,
        reservations: action.payload,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
