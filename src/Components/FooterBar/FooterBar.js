import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import classes from './FooterBar.module.css'

// Components
import SocialLinks from '../SocialLinks'

// Data
import * as Strings from '../../Data/Strings'
import FooterLinkData from '../../Data/FooterLinkData'

// TODO: Add menu items

export class FooterBar extends Component {
  static propTypes = {
  }


  getLinkEntries = () => {
    const links = FooterLinkData.map((link, index) => {
      return <div key={index} id={link.id} className={classes.areaEntry}><a href={link.linkTo}>{ link.displayAs }</a></div>
    })
    return links
  }

  render () {

    return (
      <div id='footer-bar' className={classes.footerBar}>
        <div className={classes.footerContainer}>
          <div className={classes.linkArea}>
            <div className={classes.areaHeading}>{ Strings.FOOTER_BAR_HEADING_LINKS }</div>
            {
              this.getLinkEntries()
            }
          </div>
          <div className={classes.socialArea}>
            <SocialLinks />
          </div>
          <div className={classes.partnerArea}>
            <div className={classes.partnerLogo}><img src="/images/logos/RICS-TECH-PARTNER-LOGO.jpg" alt="RICS Logo" /></div>
          </div>
        </div>
        <div className={classes.legalArea}>
          { Strings.COPYRIGHT_TEXT.replace("YEARPLACEHOLDER", (new Date()).getFullYear()) }
        </div>
      </div>
    )
  }
}

export default FooterBar
