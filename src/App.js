import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
        
        </Route>
        <Route path="/users">
         
        </Route>
        <Route   path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
