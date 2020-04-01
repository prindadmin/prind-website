import React, { Component } from 'react'

import * as Strings from '../../Data/Strings'
import {
  featuresOne
} from '../../Data/Features'

// Components
import HeroSection from '../../Components/Hero'
import FeatureCircles from '../../Components/FeatureCircles'
import SideBySide from '../../Components/SideBySide'

export class LandingPage extends Component {

  getSideBySideOneLeft = () => {
    return (
      <div>
        <img src="/images/sidebyside/triall_connect.png" alt='triall connect' />
      </div>
    )
  }

  getSideBySideOneRight = () => {
    return (
      <div>
        <h3>{Strings.SIDEBYSIDE_ONE_TITLE}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }

  getSideBySideTwoLeft = () => {
    return (
      <div>
        <h3>{Strings.SIDEBYSIDE_TWO_TITLE}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    )
  }

  getSideBySideTwoRight = () => {
    return (
      <div>
        <img src="/images/sidebyside/factom_connect.png" alt='factom connect' />
      </div>
    )
  }


  render () {

    return (
      <div id='landing-page' className='full-width'>
        <HeroSection
          title={ Strings.HERO_TITLE }
          subtitle={ Strings.HERO_SUBTITLE }
          reference='hero'
        />
        <FeatureCircles
          title={ Strings.FEATURES_ONE_TITLE }
          subtitle={ Strings.FEATURES_ONE_SUBTITLE }
          backgroundColor={ "#DDD" }
          featuresDetails={featuresOne}
        />
        <SideBySide
          backgroundColor={ "#FFF" }
          leftCols={ 4 }
          rightCols={ 8 }
          leftSide={ this.getSideBySideOneLeft }
          rightSide={ this.getSideBySideOneRight }
        />
        <SideBySide
          backgroundColor={ "#F0F0F0" }
          leftCols={ 6 }
          rightCols={ 6 }
          leftSide={ this.getSideBySideTwoLeft }
          rightSide={ this.getSideBySideTwoRight }
        />
      </div>
    )
  }
}

export default LandingPage
