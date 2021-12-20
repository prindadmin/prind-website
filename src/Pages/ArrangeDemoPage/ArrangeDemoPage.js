import React, { Component } from 'react'

// Tools
import ReactGA from 'react-ga';

import * as STRINGS from '../../Data/Strings'

// Components
import HeroSection from '../../Components/Hero'
import FeaturesSection from '../../Components/FeaturesSection'
import VerticalDotsSection from '../../Components/VerticalDotsSection'
import CarouselSection from '../../Components/CarouselSection'
import CTASection from '../../Components/CTASection'
import FooterBar from '../../Components/FooterBar'

export class ArrangeDemoPage extends Component {

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

  // TODO: Build this page

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
        <CarouselSection
          reference='reasons'
          title={STRINGS.REASONS_TITLE}
          body={STRINGS.REASONS_BODY}
          screenDimensions={ this.state.screenDimensions }
        />
        <CTASection
          reference='cta'
          title={STRINGS.CTA_SECTION_TITLE}
          body={STRINGS.CTA_SECTION_BODY}
          ctaButton={STRINGS.CTA_SECTION_BUTTON_TEXT}
          screenDimensions={ this.state.screenDimensions }
        />
        <FooterBar
          screenDimensions={ this.state.screenDimensions }
        />
      </div>
    )
  }
}

export default ArrangeDemoPage
