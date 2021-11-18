import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoursesSucceed } from '../redux/reservations/Reservations';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationsReducer.reservations);

  useEffect(() => {
    dispatch(fetchCoursesSucceed());
  }, [dispatch]);

  return (
    <div>
      {reservations && reservations.map((reservation) => (
        <p key={reservation.id}>
          {' '}
          {reservation.username}
          {' '}
          {reservation.course}
          {' '}
          {reservation.course_id}
          {' '}
          start by
          {' '}
          {reservation.start_date}
          {' '}
        </p>
      ))}
    </div>
  );
};

export default MyReservations;
