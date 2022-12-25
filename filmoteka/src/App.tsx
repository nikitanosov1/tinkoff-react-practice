import { Navigate, Route, Routes } from "react-router-dom";
import './App.css';
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { MovieDetails } from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/movies' element={<Main />}>
          <Route path=":id" element={<MovieDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </div>
  );
}

export default App;
