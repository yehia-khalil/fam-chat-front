import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './components/auth/login';
import Home from './components/home';
import NavBar from './components/navbar'
import Register from './components/auth/register';
import PusherClass from './Pusher/pusher';

function App() {
  let [value, setValue] = useState(null);
  
  
  return (
    <Router>
      <div>
        <NavBar setValue={setValue}/>

        <Switch>
          <Route path="/login">
            <Login setValue={setValue} />
          </Route>
          <Route path="/register">
            <Register setValue={setValue}/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Redirect from="*" to="/home" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
