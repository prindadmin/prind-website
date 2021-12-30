import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './FooterBar.module.css'

// Components
//import SocialLinks from '../SocialLinks'

// Data
import { MOBILE_BREAK_WIDTH } from '../../Data/Constants'
import * as STRINGS from '../../Data/Strings'
import FooterLinkData from '../../Data/FooterLinkData'

// TODO: Add menu items

export class FooterBar extends Component {
  static propTypes = {
    screenDimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }


  getLinkEntries = () => {
    const links = FooterLinkData.map((link, index) => {
      return <div key={index} id={link.id} className={classes.areaEntry}><a href={link.linkTo}>{ link.displayAs }</a></div>
    })
    return links
  }

  render () {

    return (
      <div id='component-footer-section' className={`full-width ${classes.sectionComponent}`}>
        <div className={classes.contentContainer}>
          <div className={classes.leftText}>
            <img src='/images/logos/prin-d-logo-white.png' alt='' className={classes.logoImage} />
            <h2>{STRINGS.HERO_SUBTITLE}</h2>
            {
              this.props.screenDimensions.width <= MOBILE_BREAK_WIDTH ?
              <img src="/images/logos/RICS-TECH-PARTNER-LOGO.jpg" alt="RICS Logo"className={classes.ricsLogo} /> :
              null
            }
            <div className={classes.legalArea}>
              { STRINGS.COPYRIGHT_TEXT.replace("YEARPLACEHOLDER", (new Date()).getFullYear()) }
            </div>
            {
              this.props.screenDimensions.width <= MOBILE_BREAK_WIDTH ?
              <p>Website by <a href='https://www.clixels.co.uk/'>Clixels</a></p> :
              null
            }
          </div>
          {
            this.props.screenDimensions.width > MOBILE_BREAK_WIDTH ?
            <div className={classes.rightText}>
              <img src="/images/logos/RICS-TECH-PARTNER-LOGO.jpg" alt="RICS Logo"className={classes.ricsLogo} />
              <p>Website Design by <a href='https://www.clixels.co.uk/'>Clixels</a></p>
            </div> :
            null
          }
        </div>
      </div>
    )
  }
}

export default FooterBar
