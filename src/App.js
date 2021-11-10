import React from 'react';
import Navbar from './Components/Navbar.js';
import Mounting from './Components/Mounting.js';
import Unmounting from './Components/Unmounting.js';
import Updating from './Components/Updating.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
function App() {
  return (
    <div className="main">
      <Router>
        <Navbar />
        <Switch >
          <Route path='/Unmounting'>
            <Unmounting />
          </Route>
          <Route path='/Updating'>
            <Updating />
          </Route>
          <Route path='/Mounting'>
            <Mounting />
          </Route>
        </Switch>
      </Router>
      </div>
    
  );
}
export default App;
