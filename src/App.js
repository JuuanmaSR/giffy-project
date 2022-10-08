import { Route, Link, Switch } from 'wouter'
import { GifsContextProvider } from './context/GifsContext'
import { UserContextProvider } from './context/UserContext'
import logo from './logo.png'

import Home from 'pages/Home'
import Header from 'components/Header'
import Login from 'pages/Login'
import Register from 'pages/Register'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail';
import PageNotFound from 'pages/PageNotFound';

import './App.css';

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Header />
        <section className="App-content">
          <Link to='/'>
            <img className='app-logo' alt='Giffy Logo' src={logo} />
          </Link>
          <h2 className='text-app-logo' >Giffy</h2>
          <GifsContextProvider>
            <Switch>
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
                component={Login}
                path='/login'
              />
              <Route
                component={Register}
                path='/register'
              />
              <Route
                component={PageNotFound}
                path='/:rest*'
              />
            </Switch>
          </GifsContextProvider>
        </section>
      </div>
    </UserContextProvider>
  );
}

export default App;
