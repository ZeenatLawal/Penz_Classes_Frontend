import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRoutes = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1>Welcome to PENZ Classes</h1>
      <p>
        We are an online school that provides a
        wide range of programming courses, and more.
      </p>
      <p>Learn, Explore, and Improve your skills!</p>
      <div>
        <button type="button" className="btn btn-lg btn-secondary" onClick={() => handleRoutes('/login')}>Start Learning Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
