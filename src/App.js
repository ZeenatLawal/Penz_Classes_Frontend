import './styles/App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navpanel from './components/Navbar';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ReserveForm from './pages/ReserveForm';
import DeleteCourse from './pages/DeleteCourse';
import MyReservations from './pages/MyReservations';
import { checkAutoLogin } from './redux/users/actions/AuthAction';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    checkAutoLogin(dispatch);
  }, [dispatch, checkAutoLogin]);

  return (
    <div className="d-flex flex-md-row flex-column App">
      <Router>
        <Navpanel />
        <Routes>
          <Route path="/courses" exact element={<CourseListing />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myreservations" element={<MyReservations />} />
          <Route path="/reserve" element={<ReserveForm />} />
          <Route path="/delete-courses" element={<DeleteCourse />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
