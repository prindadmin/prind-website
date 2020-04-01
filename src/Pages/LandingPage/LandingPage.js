import React, { Component } from 'react'

import * as Strings from '../../Data/Strings'
import {
  featuresOne
} from '../../Data/Features'

// Components
import HeroSection from '../../Components/Hero'
import FeatureCircles from '../../Components/FeatureCircles'

export class LandingPage extends Component {

  componentDidMount () {
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
          backgroundColor={ "#AAA" }
          featuresDetails={featuresOne}
        />
      </div>
    )
  }
}

export default LandingPage
