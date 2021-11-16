import React from 'react';
import Drop from '../components/Dropdown';

const ReserveForm = () => (
  <div>
    <form>
      <h2>Reserve a spot in one of our courses</h2>
      <input type="date" />
      <Drop />
      <button type="button">Reserve</button>
    </form>
  </div>
);

export default ReserveForm;
