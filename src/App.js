import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Imports
import LandingPage from './Pages/LandingPage'


function App() {
  return (
    <Router>
      <div className="App container-fluid">
        <div className='all-content row'>
          <Switch>
            <Route exact path='/' component={ LandingPage } />
            <Route component={ LandingPage } />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
