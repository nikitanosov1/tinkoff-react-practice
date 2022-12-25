import { Route, Routes } from "react-router-dom";
import './App.css';
import { MovieDetails } from "./components/MovieDetails/MovieDetails";
import { Home } from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/movies" element={<Home />} /> */}
        <Route path="/movies/:id/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
