import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const MyReservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservation.reservations);
  useEffect(() => {
    dispatch(fetchReservation());
  }, [dispatch]);
  return (
    <div>
      <h1>Reservations</h1>
    </div>
  );
};

export default MyReservations;
