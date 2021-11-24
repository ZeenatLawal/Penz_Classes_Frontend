import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
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
    <Container className="main-reserve-wrapper">
      <div className="reserve-wrapper">
        {myReservations && myReservations.map((reservation) => (
          <div className="d-flex" key={reservation.id}>
            <div>
              <img className="reserve-img" src={reservation.image} alt="img" />
            </div>
            <div className="color-reserve pt-5 text-center">
              <h6>{reservation.course}</h6>
              start by
              <h6>{reservation.start_date}</h6>
            </div>
          </div>
        ))}
      </div>
      {(!myReservations || !myReservations[0]) && (
        <h5>No reservations yet!</h5>)}
    </Container>
  );
};

export default MyReservations;
