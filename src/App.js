import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Page Imports
import LandingPage from './Pages/LandingPage'

// Component Imports
import HeaderBar from './Components/HeaderBar'
import FooterBar from './Components/FooterBar'

// Data Import
import * as Strings from './Data/Strings'

// Library Imports
import ReactGA from 'react-ga';

// TODO: Fork and fix react-reveal

class App extends Component {

  constructor() {
    super()
    this.state = {
      oldConsoleLog: null,
    }

    // Initialise Google Analytics to log all page views
    ReactGA.initialize(process.env.REACT_APP_GA_ID, {
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    });
  }

  componentDidMount() {
    // Turn off the logger if this is a production environment
    process.env.REACT_APP_STAGE === "PRODUCTION" ? this.disableLogger() : this.enableLogger()
  }


  enableLogger = () => {
    if(this.state.oldConsoleLog == null) {
        return
    }
    window['console']['log'] = this.state.oldConsoleLog;
  };


  disableLogger = () => {
    this.setState({
      oldConsoleLog: console.log
    })
    window['console']['log'] = function() {};
  }


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
            <FooterBar />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
