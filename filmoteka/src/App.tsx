import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Movie } from './components/Movie/Movie';
import { MovieList } from './components/MovieList/MovieList';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
