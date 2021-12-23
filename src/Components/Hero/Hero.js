import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as STRINGS from '../../Data/Strings'
import * as ENDPOINTS from '../../Data/Endpoints'
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
    return <button className={`button secondary ${classes.logInButton}`} style={{ width:'39px', padding: '13px'}}><a href='https://portal.prind.tech'><img src='/images/icons/login.svg' alt='Log in' /></a></button>
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
      backgroundSize: '65vw 120%',
      backgroundPosition: 'left 38vw top 0px'
    }
  }


  render () {

    return (
      <div id='component-hero' className={`full-width ${classes.sectionComponent}`} style={this.heroBackground()}>


        <div className={classes.contentContainer}>
          <div className={classes.topRow}>
            <img src='/images/logos/prin-d-logo-white.png' alt='' className={classes.logoImage} />
            { this.headerLogInButton() }
            <Route render={({ history }) => (
              <input type='submit' className={`button primary ${classes.arrangeDemoButton}`} value='Arrange a demo' onClick={() => { history.push(ENDPOINTS.ARRANGEDEMO) }}/>
            )}/>
          </div>

          <div className={classes.textContainer}>
            <h1 className={classes.titleOne}>{STRINGS.HERO_TITLE_ONE}</h1>
            <h1>{STRINGS.HERO_TITLE_TWO}</h1>
            <div className='spacer' style={{ height: '32px' }} />
            <h2>{STRINGS.HERO_SUBTITLE}</h2>
            <div className='spacer' style={{ height: '32px' }} />
            <div className={classes.buttonContainer}>
              <Route render={({ history }) => (
                <input type='submit' className={`button primary big ${classes.arrangeDemoButton}`} value='Arrange a demo' onClick={() => { history.push(ENDPOINTS.ARRANGEDEMO) }}/>
              )}/>
              {
                this.props.screenDimensions.width > MOBILE_BREAK_WIDTH ?
                this.headerLogInButton() :
                null
              }
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Hero
