import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as STRINGS from '../../Data/Strings'
import classes from './FeaturesSection.module.css'

const FEATURES = [
  {
    icon: "/images/icons/folder.svg",
    title: STRINGS.FEATURE_MANAGED_RECORDS_TITLE,
    body: STRINGS.FEATURE_MANAGED_RECORDS_BODY
  },
  {
    icon: "/images/icons/circle-tick.svg",
    title: STRINGS.FEATURE_CDM_ASSURANCE_TITLE,
    body: STRINGS.FEATURE_CDM_ASSURANCE_BODY
  },
  {
    icon: "/images/icons/lock.svg",
    title: STRINGS.FEATURE_SECURE_DIGITAL_RECORDS_TITLE,
    body: STRINGS.FEATURE_SECURE_DIGITAL_RECORDS_BODY
  },
  {
    icon: "/images/icons/boxes.svg",
    title: STRINGS.FEATURE_SAFE_STRUCTURED_SECURE_TITLE,
    body: STRINGS.FEATURE_SAFE_STRUCTURED_SECURE_BODY
  },
  {
    icon: "/images/icons/heartbeat.svg",
    title: STRINGS.FEATURE_GOLDEN_THREAD_TITLE,
    body: STRINGS.FEATURE_GOLDEN_THREAD_BODY
  },
  {
    icon: "/images/icons/stack.svg",
    title: STRINGS.FEATURE_COMPLEXITY_SIMPLIFIED_TITLE,
    body: STRINGS.FEATURE_COMPLEXITY_SIMPLIFIED_BODY
  }
]


export class FeaturesSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    ctaButton: PropTypes.string,
    screenDimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }


  getFeatures = () => {
    return FEATURES.map((feature, index) => {
      return (
        <div key={index} className={classes.featureTile}>
          <img src={feature.icon} alt='' />
          <h4>{feature.title}</h4>
          <p>{feature.body}</p>
        </div>
      )
    })
  }

  render () {
    return (
      <div id='component-features-section' className={`full-width ${classes.sectionComponent}`}>

        <div className={classes.contentContainer}>
          <div className={classes.headingBlock}>
            <h2>{this.props.title}</h2>
            <p>{this.props.body}</p>
          </div>

          <div className={classes.featuresHolder}>
            {
              this.getFeatures()
            }
          </div>
        </div>

      </div>
    )
  }
}

export default FeaturesSection
