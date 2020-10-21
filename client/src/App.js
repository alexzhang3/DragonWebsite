import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Contact from './pages/contact';
import Coach from './pages/coach'
import Terms from './pages/terms'
import Team from './pages/team'
import Records from './pages/records'
import SafeSport from './pages/safesport'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contact" component={Contact} exact/>
        <Route path="/coach" component={Coach} exact/>
        <Route path="/terms" component={Terms} exact/>
        <Route path="/team" component={Team} exact/>
        <Route path="/records" component={Records} exact/>
        <Route path="/safesport" component={SafeSport} exact/>
      </Switch>
    </Router>
  );
}

export default App;
