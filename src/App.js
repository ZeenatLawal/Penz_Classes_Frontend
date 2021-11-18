import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ReserveForm from './pages/ReserveForm';
import DeleteCourse from './pages/DeleteCourse';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reserve" element={<ReserveForm />} />
        <Route path="/delete-courses" element={<DeleteCourse />} />
      </Routes>
    </Router>
  );
}
export default App;
