import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Data
import { Endpoints } from './Data'

// Page Imports
import LandingPage from './Pages/LandingPage'
import ProcoreSupportPage from './Pages/ProcoreSupportPage'
import SupportArticlePage from './Pages/SupportArticlePage'

// Component Imports
import FooterBar from './Components/FooterBar'

// Library Imports
import ReactGA from 'react-ga';

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
        <div className="App">
          <div className='content-container'>
            <Switch>
              <Route exact path='/' component={ LandingPage } />
              <Route exact path='/procore-support' component={ ProcoreSupportPage } />
              <Route path={`${Endpoints.PROCORESUPPORTPAGE}/:id`} component={ SupportArticlePage } />
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
