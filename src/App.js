import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, Link } from 'wouter'
function App() {



  return (
    <div className="App">
      <section className="App-content">
        <Link to='/gif/pandas'>Gifs de Pandas</Link>
        <Link to='/gif/motogp'>Gifs de MotoGp</Link>
        <Link to='/gif/drift'>Gifs de Drift</Link>
        <Link to='/gif/enduro'>Gifs de Enduro</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />

      </section>
    </div>
  );
}

export default App;
