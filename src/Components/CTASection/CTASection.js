import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

//import * as STRINGS from '../../Data/Strings'
import * as ENDPOINTS from '../../Data/Endpoints'
import classes from './CTASection.module.css'


export class CTASection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    ctaButton: PropTypes.string,
    screenDimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }


  render () {
    return (
      <div id='component-cta-section' className={`full-width ${classes.sectionComponent}`}>

        <div className={classes.contentContainer}>
          <div className={classes.headingBlock}>
            <h2>{this.props.title}</h2>
            <p>{this.props.body}</p>
          </div>
          <div className='spacer' style={{ height: '10px' }} />

          <Route render={({ history }) => (
            <input type='submit' className={`button primary big ${classes.arrangeDemoButton}`} value='Arrange a demo' onClick={() => { history.push(ENDPOINTS.ARRANGEDEMO) }}/>
          )}/>
        </div>

      </div>
    )
  }
}

export default CTASection
