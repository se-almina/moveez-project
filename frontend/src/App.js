import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MoviePage />} />
      </Routes>
    </div>
  );
}

export default App;