import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AddAdmin from './components/Admin/Admin/AddAdmin/AddAdmin';
import AddService from './components/Admin/Admin/AddService/AddService';
import Admin from './components/Admin/Admin/Admin';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import Services from './components/Services/Services';

export const UserContext = createContext()

function App() {
  const [userInfo, setUserInfo] = useState({})
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/admin/addService">
            <AddService></AddService>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/dashboard">
            <Admin></Admin>
          </Route>
          <Route path="/admin/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
