import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ReserveForm from './pages/ReserveForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/reserve" element={<ReserveForm />} />
      </Routes>
    </Router>
  );
}

export default App;
