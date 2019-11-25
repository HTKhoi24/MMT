import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import SignIn from './components/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/"><Home/></Route>
          <Route exact path = "/SignIn"><SignIn/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
