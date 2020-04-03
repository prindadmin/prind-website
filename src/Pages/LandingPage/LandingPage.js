import React, { Component } from 'react'

import * as Strings from '../../Data/Strings'
import {
  featuresOne,
  numbersListOne,
  //headlineNumbersOne,
} from '../../Data/Features'

// Components
import HeroSection from '../../Components/Hero'
import FeatureCircles from '../../Components/FeatureCircles'
import SideBySide from '../../Components/SideBySide'
import NumberList from '../../Components/NumberList'
//import HeadlineNumbers from '../../Components/HeadlineNumbers'

export class LandingPage extends Component {

  getSideBySideOneLeft = () => {
    return (
      <div>
        <img src="/images/sidebyside/construction_site.png" alt='construction site' />
      </div>
    )
  }

  getSideBySideOneRight = () => {
    return (
      <div>
        <h3>{Strings.SIDEBYSIDE_ONE_TITLE}</h3>
        <p>{Strings.SIDEBYSIDE_ONE_PARAGRAPH_ONE}</p>
        <p>{Strings.SIDEBYSIDE_ONE_PARAGRAPH_TWO}</p>
        <p>{Strings.SIDEBYSIDE_ONE_PARAGRAPH_THREE}</p>
      </div>
    )
  }

  getSideBySideTwoLeft = () => {
    return (
      <div>
        <h3>{Strings.SIDEBYSIDE_TWO_TITLE}</h3>
        <p>{Strings.SIDEBYSIDE_TWO_PARAGRAPH_ONE}</p>
        <p>{Strings.SIDEBYSIDE_TWO_PARAGRAPH_TWO}</p>
        <p>{Strings.SIDEBYSIDE_TWO_PARAGRAPH_THREE}</p>
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
        <SideBySide
          backgroundColor={ "#FFF" }
          leftCols={ 6 }
          rightCols={ 6 }
          leftSide={ this.getSideBySideOneLeft }
          rightSide={ this.getSideBySideOneRight }
        />
        <FeatureCircles
          title={ Strings.FEATURES_ONE_TITLE }
          subtitle={ Strings.FEATURES_ONE_SUBTITLE }
          backgroundColor={ "#E0E0E0" }
          featuresDetails={ featuresOne }
        />
        {/*
        <HeadlineNumbers
          backgroundColor={ "#F0F0F0" }
          items={ headlineNumbersOne }
        />
        */}
        <SideBySide
          backgroundColor={ "#FFF" }
          leftCols={ 6 }
          rightCols={ 6 }
          leftSide={ this.getSideBySideTwoLeft }
          rightSide={ this.getSideBySideTwoRight }
        />
        <NumberList
          backgroundColor={ "#E0E0E0" }
          title={ Strings.NUMBER_LIST_ONE_TITLE }
          items={ numbersListOne }
        />
      </div>
    )
  }
}

export default LandingPage
