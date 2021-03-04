import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Countries} from './components/Countries/Countries/Countries/Countries'
import {Country} from './components/Countries/Countries/Country/Country'

function App() {
  return (
    <div className="App">
    <h1>Countries</h1>
    <Router>
      <Switch>
        <Route path='/countries' exact>
          <Countries/>
        </Route>
        <Route path='/countries/:id' exact>
          <Country/>
        </Route>
      </Switch>
    </Router>
      
    </div>
  );
}

export default App;
