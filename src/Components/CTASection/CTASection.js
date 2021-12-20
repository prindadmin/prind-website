import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import * as STRINGS from '../../Data/Strings'
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

          <input type='submit' className={`button primary big ${classes.arrangeDemoButton}`} value={this.props.ctaButton}/>
        </div>

      </div>
    )
  }
}

export default CTASection
