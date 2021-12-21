import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as STRINGS from '../../Data/Strings'
import * as ENDPOINTS from '../../Data/Endpoints'
import { MOBILE_BREAK_WIDTH } from '../../Data/Constants'
import classes from './ArrangeDemo.module.css'

// TODO: Add prop to accept an array of images and have them rotate through

export class ArrangeDemo extends Component {
  static propTypes = {
    screenDimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }

  constructor() {
    super()
    this.state = {
      fullName: '',
      companyName: '',
      emailAddress: '',
      submitting: false,
      submissionError: false,
      submittedSuccessfully: false,
    }
  }

  headerLogInButton = () => {
    if (this.props.screenDimensions.width > MOBILE_BREAK_WIDTH) {
      return (
        <button type='submit' className={`button secondary ${classes.logInButton}` } style={{ padding: '0 2em'}}>
          <a href='https://portal.prind.tech'>
            <span>
              Log in
              <img src='/images/icons/login.svg' alt='Log in' style={{ marginLeft: '0.67em', transform: 'translateY(2px)' }}/>
            </span>
          </a>
        </button>
      )
    }
    return <button className={`button secondary ${classes.logInButton}`} style={{ width:'39px', padding: '13px'}}><img src='/images/icons/login.svg' alt='Log in' /></button>
  }

  heroBackground = () => {
    // TODO: Customise for larger screen resolutions
    if (this.props.screenDimensions.width > MOBILE_BREAK_WIDTH) {
      return {
        backgroundImage: [
          'url(/images/elements/strings-cropped.png)'
        ],
        backgroundRepeat: 'no-repeat',
        backgroundSize: '30vw 120%',
        backgroundPosition: 'left 55vw top 0px'
      }
    }
    return {
      backgroundImage: [
        'url(/images/elements/strings-cropped.png)'
      ],
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100vw 120%',
      backgroundPosition: 'left -30vw top 0px'
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }


  submitContactUs = (e) => {

    this.setState({
      submitting: true,
      submissionError: false,
      submittedSuccessfully: false,
    })

    const parameters = {
      fullName: this.state.fullName,
      companyName: this.state.companyName,
      emailAddress: this.state.emailAddress
    }

    // Submit to endpoint
    var xhr = new XMLHttpRequest();
    xhr.open("POST", process.env.REACT_APP_CONTACT_US_URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(parameters));

    xhr.onerror = () => {
      this.setState({
        submitting: false,
        submissionError: true,
        submittedSuccessfully: false,
      })
    };

    xhr.onloadend = () => {
    	if (xhr.status >= 200 && xhr.status < 300) {
    		// What do when the request is successful
    		this.setState({
          submitting: true,
          submissionError: false,
          submittedSuccessfully: true,
        })
        return;
    	};

      this.setState({
        submitting: true,
        submissionError: true,
        submittedSuccessfully: false,
      })

    };
  }


  render () {

    return (
      <div id='component-hero' className={`full-width ${classes.sectionComponent}`} style={this.heroBackground()}>


        <div className={classes.contentContainer}>
          <div className={classes.topRow}>
            <Route render={({ history }) => (
              <img src='/images/logos/prin-d-logo-white.png' alt='' className={classes.logoImage} onClick={() => { history.push(ENDPOINTS.DEFAULTPAGE) }}/>
            )}/>
            { this.headerLogInButton() }
            <Route render={({ history }) => (
              <input type='submit' className={`button primary ${classes.arrangeDemoButton}`} value='Arrange a demo' onClick={() => { history.push(ENDPOINTS.ARRANGEDEMO) }}/>
            )}/>
          </div>

          <div className={classes.formContainer}>

            <div className={classes.formBox}>
              <h2>{STRINGS.ARRANGE_A_DEMO}</h2>
              <label for='fullName'>{STRINGS.FULLNAME}</label>
              <input id='fullName' type='text' value={this.state.fullName} onChange={this.handleChange} disabled={this.state.submitting}/>

              <label for='companyName'>{STRINGS.COMPANYNAME}</label>
              <input id='companyName' type='text' value={this.state.companyName} onChange={this.handleChange} disabled={this.state.submitting}/>

              <label for='emailAddress'>{STRINGS.EMAILADDRESS}</label>
              <input id='emailAddress' type='email' value={this.state.emailAddress} onChange={this.handleChange} disabled={this.state.submitting}/>

              {
                this.state.submissionError ? <p className={classes.errorSubmittingText}>{STRINGS.FORM_ERROR_SUBMITTING}</p> : null
              }

              {
                this.state.submittedSuccessfully ? <p className={classes.successSubmittingText}>{STRINGS.FORM_SUBMISSION_SUCCESSFUL}</p> : null
              }

              <button type='submit' className={`button secondary ${classes.submitButton}` } onClick={this.submitContactUs} disabled={this.state.submitting}>
                { STRINGS.ARRANGE_A_DEMO }
              </button>

            </div>

          </div>

          <p className={classes.privacyText}>By entering your details above, you are agreeing to our <a href=''>Privacy Policy</a></p>

        </div>

      </div>
    )
  }
}

export default ArrangeDemo
