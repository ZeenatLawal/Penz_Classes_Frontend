import { reserveCourse } from '../../Api';

const RESERVE_COURSE = 'penz_classes_frontend/courses/RESERVE_COURSE';

const initialState = [];

export const reserve = (course) => async (dispatch) => {
  const created = await reserveCourse(course);

  if (created) {
    dispatch({
      type: RESERVE_COURSE,
      payload: course,
    });
  }
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_COURSE:
      return {
        ...state,
        reservations: action.payload,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
