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
import ManageService from './components/Admin/Admin/ManageService/ManageService';
import BookService from './components/BookService/BookService';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRouter from './components/Login/PrivateRouter';
import Services from './components/Services/Services';

export const UserContext = createContext()

function App() {
  const [userInfo, setUserInfo] = useState({})
  const [bookingService, setBookingService] = useState({})
  console.log(userInfo);
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, bookingService, setBookingService }}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRouter path="/admin/bookingService">
            <BookService></BookService>
          </PrivateRouter>
          <PrivateRouter path="/admin/addService">
            <AddService></AddService>
          </PrivateRouter>
          <PrivateRouter path="/services">
            <Services></Services>
          </PrivateRouter>
          <Route path="/admin/manageService">
            <ManageService></ManageService>
          </Route>
          <PrivateRouter path="/dashboard">
            <Admin></Admin>
          </PrivateRouter>
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
