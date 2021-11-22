import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleRoutes = (path) => {
    navigate(path);
  };

  return (
    <div className="landing-page d-flex flex-column w-100 justify-content-center align-items-center">
      <h1 className="page-title text-uppercase mb-5">Welcome to PENZ Classes</h1>
      <p className="fs-5 mb-2">
        We are an online school that provides a
        wide range of programming courses, and more.
      </p>
      <p className="fs-6 mb-3">Learn, Explore, and Improve your skills!</p>
      <div>
        <button type="button" className="btn btn-lg text-white" onClick={() => handleRoutes('/login')}>Start Learning Now</button>
      </div>
    </div>
  );
};

export default LandingPage;
