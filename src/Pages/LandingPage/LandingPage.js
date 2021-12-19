import React, { Component } from 'react'

// Tools
import ReactGA from 'react-ga';

import * as STRINGS from '../../Data/Strings'
/*
import {
  featuresOne,
  numbersListOne,
  //headlineNumbersOne,
} from '../../Data/Features'
*/

// Components
//import HeaderBar from '../../Components/HeaderBar'
import HeroSection from '../../Components/Hero'
import FeaturesSection from '../../Components/FeaturesSection'
import VerticalDotsSection from '../../Components/VerticalDotsSection'
//import FeatureCircles from '../../Components/FeatureCircles'
//import SideBySide from '../../Components/SideBySide'
//import HeadlineNumbers from '../../Components/HeadlineNumbers'
//import ContactUs from '../../Components/ContactUs'

export class LandingPage extends Component {

  constructor() {
    super()
    this.state = {
      screenDimensions: {
        width: 0,
        height: 0
      }
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    // Register pageview with GA
    ReactGA.pageview("/");
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      screenDimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  render () {
    return (
      <div id='landing-page' className='full-width'>
        <HeroSection
          reference='hero'
          screenDimensions={ this.state.screenDimensions }
        />
        <FeaturesSection
          reference='features'
          title={STRINGS.ALL_YOUR_INFO_TITLE}
          body={STRINGS.ALL_YOUR_INFO_BODY}
          screenDimensions={ this.state.screenDimensions }
        />
        <VerticalDotsSection
          reference='features'
          title={STRINGS.VERTICAL_DOTS_TITLE}
          screenDimensions={ this.state.screenDimensions }
        />
      </div>
    )
  }
}

export default LandingPage
