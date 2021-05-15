import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Data
import * as Strings from '../../Data/Strings'


export class ContactUs extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      organisation: '',
      emailAddress: '',
      message: '',
      newPassword: '',
      submitting: false,
      submissionError: false,
      submittedSuccessfully: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  onSubmit = (e) => {
    e.stopPropagation()
    e.preventDefault()
    console.log(this.state)

    const that = this;

    this.setState({
      submitting: true,
      submissionError: false,
      submittedSuccessfully: false,
    })

    // Submit to endpoint
    var xhr = new XMLHttpRequest();
    xhr.open("POST", process.env.REACT_APP_CONTACT_US_URL, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(this.state));

    xhr.onerror = function () {
      that.setState({
        submitting: false,
        submissionError: true,
        submittedSuccessfully: false,
      })
    };

    xhr.onloadend = function () {
    	if (xhr.status >= 200 && xhr.status < 300) {
    		// What do when the request is successful
    		that.setState({
          submitting: false,
          submissionError: false,
          submittedSuccessfully: true,
        })
        return;
    	};

      that.setState({
        submitting: false,
        submissionError: true,
        submittedSuccessfully: false,
      })

    };
  }


  getForm = () => {
    return (
      <form id='contact-form'>
        <label htmlFor="firstName">{ Strings.FORM_PLACEHOLDER_FIRST_NAME }</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          placeholder={ Strings.FORM_PLACEHOLDER_FIRST_NAME }
          value={this.state.firstName}
          onChange={this.handleInputChange}
          className={ this.state.firstName === null ? "default" : "filled" }/>

        <label htmlFor="lastName">{ Strings.FORM_PLACEHOLDER_LAST_NAME }</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          placeholder={ Strings.FORM_PLACEHOLDER_LAST_NAME }
          value={this.state.lastName}
          onChange={this.handleInputChange}
          className={ this.state.lastName === null ? "default" : "filled" }/>

          <label htmlFor="organisation">{ Strings.FORM_PLACEHOLDER_ORGANISATION }</label>
          <input
          id="organisation"
          name="organisation"
          type="text"
          placeholder={ Strings.FORM_PLACEHOLDER_ORGANISATION }
          value={this.state.organisation}
          onChange={this.handleInputChange}
          className={ this.state.organisation === null ? "default" : "filled" }/>

          <label htmlFor="emailAddress">{ Strings.FORM_PLACEHOLDER_EMAIL_ADDRESS }</label>
          <input
          id="emailAddress"
          name="emailAddress"
          type="text"
          placeholder={ Strings.FORM_PLACEHOLDER_EMAIL_ADDRESS }
          value={this.state.emailAddress}
          onChange={this.handleInputChange}
          className={ this.state.emailAddress === null ? "default" : "filled" }/>

          <label htmlFor="message">{ Strings.FORM_PLACEHOLDER_MESSAGE }</label>
          <input
          id="message"
          name="message"
          type="textarea"
          placeholder={ Strings.FORM_PLACEHOLDER_MESSAGE }
          value={this.state.message}
          onChange={this.handleInputChange}
          className={ this.state.message === null ? "default textarea" : "filled textarea" }/>

          <label htmlFor="newPassword">New Password</label>
          <input
          id="newPassword"
          name="newPassword"
          type="text"
          className='h-o-n-e-y'
          tabIndex="-1"
          autoComplete="nope" />

        <input
          type="submit"
          value={ Strings.FORM_SUBMIT }
          className="submit-button btn-primary"
          onClick={(e) => this.onSubmit(e)} />

      </form>
    )
  }

  getSpinner = () => {
    return (
      <React.Fragment>
        <div className='lds-ring'><div></div><div></div><div></div><div></div></div>
      </React.Fragment>
    )
  }

  getSubmissionErrorComponent = () => {
    return (
      <div className='submission-error'>
        <h3>{ Strings.FORM_ERROR_SUBMITTING }</h3>
      </div>
    )
  }

  getSubmissionSuccessComponent = () => {
    return (
      <h3>{ Strings.FORM_SUBMISSION_SUCCESSFUL }</h3>
    )
  }


  render () {

    const { backgroundColor } = this.props
    var componentStyle = {}

    if (backgroundColor !== null) {
      componentStyle = { backgroundColor: backgroundColor }
    }


    return (
      <div id='component-contact-us' style={componentStyle}>
        <div className='component-contact-us-content-container '>

          <div className='item text-container'>
            <h3>{ Strings.CONTACT_US_HEADING }</h3>
            <p>{ Strings.CONTACT_US_TEXT_1 }</p>
            <p>{ Strings.CONTACT_US_TEXT_2 }</p>
          </div>

          <div className='item form-container'>
            { this.state.submissionError ? this.getSubmissionErrorComponent() : null }
            { this.state.submittedSuccessfully ? this.getSubmissionSuccessComponent() : null }
            { this.state.submitting ? this.getSpinner() : null }
            { !this.state.submitting && !this.state.submittedSuccessfully ? this.getForm() : null }

          </div>

        </div>
      </div>
    )
  }
}

export default ContactUs
