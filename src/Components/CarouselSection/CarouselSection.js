import React, { Component } from 'react'
import PropTypes from 'prop-types'

import * as STRINGS from '../../Data/Strings'
import classes from './CarouselSection.module.css'

const REASONS = [
  {
    body: STRINGS.REASONS_REASON_ONE_BODY
  },
  {
    body: STRINGS.REASONS_REASON_TWO_BODY
  },
  {
    body: STRINGS.REASONS_REASON_THREE_BODY
  }
]


export class CarouselSection extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    screenDimensions: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired
    }).isRequired
  }

  constructor() {
    super()
    this.state = {
      currentItem: 1
    }
  }

  onChangeItem = (changeCountBy) => {

    // If this is going up by one and it's at the end of the list; go to the 0th item
    if (this.state.currentItem === REASONS.length - 1 && changeCountBy === 1) {
      this.setState({
        currentItem: 0
      })
      return
    }

    // If this is going down by one and it's at the first of the list; go to the last item
    if (this.state.currentItem === 0 && changeCountBy === -1) {
      this.setState({
        currentItem: REASONS.length - 1
      })
      return
    }

    // Otherwise, apply the change
    this.setState({
      currentItem: this.state.currentItem + changeCountBy
    })
  }

  getReasons = () => {

    // These numbers will have to be calculated rather than hard coded
    const CAROUSEL_ITEM_WIDTH = 500
    const CAROUSEL_ITEM_HOLDER_WIDTH = 354

    return (
      <div className={classes.reasonsGrid} style={{ transform: `translateX(-${(CAROUSEL_ITEM_WIDTH * this.state.currentItem) + (CAROUSEL_ITEM_WIDTH - CAROUSEL_ITEM_HOLDER_WIDTH) / 2}px)`, transition: 'all 250ms' }}>
        {
          REASONS.map((feature, index) => {
            return (
              <div key={index} className={classes.featureTile} style={{ margin: '0 auto', width: CAROUSEL_ITEM_HOLDER_WIDTH }}>
                <h4>{`Reason ${index + 1}`}</h4>
                <p>{feature.body}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  // TODO: Continue here; add the controls
  render () {
    return (
      <div id='component-carousel-section' className={`full-width ${classes.sectionComponent}`}>

        <div className={classes.contentContainer}>
          <div className={classes.headingBlock}>
            <h2>{this.props.title}</h2>
            <p>{this.props.body}</p>
          </div>

          <div className={classes.carouselHolder}>
            <div className={classes.itemHolder}>
              {
                this.getReasons()
              }
            </div>
            <div className={classes.controlHolder} onClick={(e) => { this.onChangeItem(1) }}>
              Test.....
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default CarouselSection
