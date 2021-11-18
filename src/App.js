import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CourseListing from './components/CourseListing';
import CourseDetails from './components/CourseDetails';
import ReserveForm from './pages/ReserveForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<CourseListing />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/reserve" element={<ReserveForm />} />
      </Routes>
    </Router>
  );
}

export default App;
