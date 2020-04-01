import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Imports
import LandingPage from './Pages/LandingPage'

// Component Imports
import HeaderBar from './Components/HeaderBar'

// Data Import
import * as Strings from './Data/Strings'

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App container-fluid">
          <div className='all-content row'>
            <HeaderBar
              companyName={Strings.HEADER_COMPANY_NAME}
            />
            <Switch>
              <Route exact path='/' component={ LandingPage } />
              <Route component={ LandingPage } />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
