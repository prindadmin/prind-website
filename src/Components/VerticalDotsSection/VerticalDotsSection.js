import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as STRINGS from '../../Data/Strings'
import classes from './VerticalDotsSection.module.css'

const POINTS = [
  {
    title: STRINGS.VERTICAL_DOTS_SIMPLIFY_CDM_TITLE,
    body: STRINGS.VERTICAL_DOTS_SIMPLIFY_CDM_BODY
  },
  {
    title: STRINGS.VERTICAL_DOTS_TIRED_OF_GAPS_TITLE,
    body: STRINGS.VERTICAL_DOTS_TIRED_OF_GAPS_BODY
  },
  {
    title: STRINGS.VERTICAL_DOTS_ONE_PLACE_TITLE,
    body: STRINGS.VERTICAL_DOTS_ONE_PLACE_BODY
  }
]


export class VerticalDotsSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    screenDimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }


  getPoints = () => {
    return POINTS.map((feature, index) => {
      return (
        <div key={index} className={classes.featureTile}>
          <div className={classes.lineHolder}>
            <div className={classes.joiningLine} />
            <div className={classes.topCircle} />
          </div>
          <div className={classes.textHolder}>
            <h4>{feature.title}</h4>
            <p>{feature.body}</p>
          </div>
        </div>
      )
    })
  }

  render () {
    return (
      <div id='component-vertical-dots-section' className={`full-width ${classes.sectionComponent}`}>

        <div className={classes.contentContainer}>
          <div className={classes.headingBlock}>
            <h2>{this.props.title}</h2>
          </div>

          <div className={classes.featuresHolder}>
            {
              this.getPoints()
            }
          </div>
        </div>

      </div>
    )
  }
}

export default VerticalDotsSection
