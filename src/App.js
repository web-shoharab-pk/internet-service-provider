import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Admin from './components/Admin/Admin/Admin';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/users">

        </Route>
        <Route path="/dashboard">
          <Admin></Admin>
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
