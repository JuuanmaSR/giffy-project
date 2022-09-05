import './App.css';
import { Route, Link} from 'wouter'
import { GifsContextProvider } from './context/GifsContext'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail';
import PageNotFound from 'pages/PageNotFound';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className='app-logo' alt='Giffy Logo' src={logo} />
        </Link>
        <h2 className='text-app-logo' >Giffy</h2>
        <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            />
            <Route
              component={Detail}
              path='/gif/:id'
            />
            <Route
              component={SearchResults}
              path='/search/:keyword/:rating?/:language?'
            />
            <Route
              component={PageNotFound}
              path = '/404'
            />
        </GifsContextProvider>
      </section>
    </div>
  );
}

export default App;
