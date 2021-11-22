import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCoursesSucceed } from '../redux/reservations/Reservations';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservationsReducer.reservations);
  const user = useSelector((state) => state.authReducer.user.username);

  useEffect(() => {
    dispatch(fetchCoursesSucceed());
  }, [dispatch]);

  let myReservations;
  if (reservations) {
    myReservations = reservations.filter((reservation) => reservation.username === user);
  }
  return (
    <div>
      <div>
        {myReservations && myReservations.map((reservation) => (
          <div key={reservation.id}>
            <p>
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
            <img src={reservation.image} alt="img" />
          </div>
        ))}
      </div>
      {(!myReservations || !myReservations[0]) && (
      <h5>No reservations yet!</h5>)}
    </div>
  );
};

export default MyReservations;
