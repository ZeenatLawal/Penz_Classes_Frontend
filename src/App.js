import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReserveForm from './pages/ReserveForm';
import MyReservations from './pages/MyReservations';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/reserve" element={<ReserveForm />} />
        <Route path="/myreservations" element={<MyReservations />} />
      </Routes>
    </Router>
  );
}

export default App;
