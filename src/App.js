import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReserveForm from './pages/ReserveForm';
import DeleteCourse from './pages/DeleteCourse';

function App() {
  return (
    <div className="d-flex">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/reserve" element={<ReserveForm />} />
          <Route path="/delete-courses" element={<DeleteCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
