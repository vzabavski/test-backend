import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {Countries} from './components/Countries/Countries/Countries/Countries'
import {Country} from './components/Countries/Countries/Country/Country'
import {Auth} from './components/Countries/Countries/Auth/Auth'

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path='/countries' exact>
          <Countries/>
        </Route>
        <Route path='/users' exact>
          <Auth />
        </Route>
        <Route path='/countries/:id' exact>
          <Country/>
        </Route>
        <Redirect from='/' to='/countries' />
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
