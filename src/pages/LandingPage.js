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
        We teach different kinds of programming courses ranging
        from software development, data science and so much more
      </p>
      <div>
        <button type="button" onClick={() => handleRoutes('/login')}>Login</button>
        <button type="button" onClick={() => handleRoutes('/signup')}>SignUp</button>
      </div>
    </div>
  );
};

export default LandingPage;
