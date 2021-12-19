import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as STRINGS from '../../Data/Strings'
import { MOBILE_BREAK_WIDTH } from '../../Data/Constants'
import classes from './Hero.module.css'

// TODO: Add prop to accept an array of images and have them rotate through

export class Hero extends Component {
  static propTypes = {
    screenDimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }


  headerLogInButton = () => {
    if (this.props.screenDimensions.width > MOBILE_BREAK_WIDTH) {
      return (<input type='submit' className={`button secondary ${classes.logInButton}`}>Log in</input>)
    }
    return (<button className={`button secondary ${classes.logInButton}`} style={{ width:'39px', padding: '13px'}}><img src='/images/icons/login.svg' alt='Log in' /></button>)
  }

  heroBackground = () => {
    // TODO: Customise for larger screen resolutions
    return {
      backgroundImage: [
        'url(/images/elements/strings-cropped.png)'
      ],
      backgroundRepeat: 'no-repeat',
      backgroundSize: '65vw 120%',
      backgroundPosition: 'left 38vw top 0px'
    }
  }


  render () {

    return (
      <div id='component-hero' className={`full-width ${classes.heroComponent}`} style={this.heroBackground()}>


        <div className={classes.heroContentContainer}>
          <div className={classes.topRow}>
            <img src='/images/logos/prin-d-logo-white.png' alt='' className={classes.logoImage} />
            { this.headerLogInButton() }
            <input type='submit' className={`button primary ${classes.arrangeDemoButton}`} value='Arrange a demo'/>
          </div>

          <div className={classes.textContainer}>
            <h1 style={{ marginBottom: '1em' }}>{STRINGS.HERO_TITLE_ONE}</h1>
            <h1>{STRINGS.HERO_TITLE_TWO}</h1>
            <div className='spacer' style={{ height: '32px' }} />
            <h2>{STRINGS.HERO_SUBTITLE}</h2>
            <div className='spacer' style={{ height: '32px' }} />
            <input type='submit' className={`button primary big ${classes.arrangeDemoButton}`} value='Arrange a demo'/>
            {
              this.props.screenDimensions.width > MOBILE_BREAK_WIDTH ?
              <input type='submit' className={`button secondary ${classes.logInButton}`} value='Log in'/> :
              null
            }
          </div>
        </div>

      </div>
    )
  }
}

export default Hero
