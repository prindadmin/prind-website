import React, { Component } from 'react'
import classes from './ProcoreSupportPage.module.css'

// Tools
import ReactGA from 'react-ga';

// Data
import { Endpoints, Strings } from '../../Data'

// Components
import HeaderBar from '../../Components/HeaderBar'
//import SupportSearch from '../../Components/SupportSearch'
//import SupportGuides from '../../Components/SupportGuides'
import SupportArticles from '../../Components/SupportArticles'

// TODO: Add support image to the top of the page

export class ProcoreSupportPage extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
  }

  componentDidMount() {
    // Register pageview with GA
    ReactGA.pageview(Endpoints.PROCORESUPPORTPAGE);
  }

  searchChange = (searchTerm) => {
    this.setState({
      searchTerm
    })
  }

  render () {
    return (
      <div id='procore-support-page'>
        <HeaderBar companyName={Strings.HEADER_COMPANY_NAME} fadeIn={false} />
        <div id='procore-support-page' className={classes.procorePage}>
          <div className={classes.title}>
            <h3>{ Strings.SUPPORT_TITLE }</h3>
          </div>
          <div className={classes.preamble}>
            { Strings.SUPPORT_PREAMBLE }
          </div>
          {
            /*
            <SupportSearch searchChange={this.searchChange} searchTerm={this.state.searchTerm} />
            <SupportGuides searchTerm={this.state.searchTerm} />
            */
          }
          <SupportArticles searchTerm={this.state.searchTerm} />
        </div>
      </div>
    )
  }
}

export default ProcoreSupportPage
