import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './FooterBar.module.css'

// Components
//import SocialLinks from '../SocialLinks'

// Data
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
          <img src='/images/logos/prin-d-logo-white.png' alt='' className={classes.logoImage} />
          <h2>{STRINGS.HERO_SUBTITLE}</h2>
          <img src="/images/logos/RICS-TECH-PARTNER-LOGO.jpg" alt="RICS Logo"className={classes.ricsLogo} />
          <div className={classes.legalArea}>
            { STRINGS.COPYRIGHT_TEXT.replace("YEARPLACEHOLDER", (new Date()).getFullYear()) }
          </div>
        </div>
      </div>
    )
  }
}

export default FooterBar
