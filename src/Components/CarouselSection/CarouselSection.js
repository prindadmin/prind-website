import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { MOBILE_BREAK_WIDTH } from '../../Data/Constants'
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
      currentItem: 0,
      carouselBoxWidth: 500
    }
  }

  componentDidUpdate(prevProps) {
    let carouselbox = document.getElementById('carouselbox');
    if (!carouselbox) {
      return
    }
    if (this.state.carouselBoxWidth === carouselbox.offsetWidth) { return }
    this.setState({
      carouselBoxWidth: carouselbox.offsetWidth
    })
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

  getItemHolder = () => {

    const CAROUSEL_ITEM_WIDTH = this.state.carouselBoxWidth
    const CAROUSEL_ITEM_HOLDER_WIDTH = CAROUSEL_ITEM_WIDTH > 700 ? 700 : CAROUSEL_ITEM_WIDTH
    const currentItemOffset = {
      startOfReason: CAROUSEL_ITEM_WIDTH * this.state.currentItem,
      centerPosition: 0
    }

    const carouselBoxStyle = {
      gridAutoColumns: `${CAROUSEL_ITEM_WIDTH}px`,
      transform: `translateX(-${currentItemOffset.startOfReason + currentItemOffset.centerPosition}px)`,
      transition: 'all 250ms'
    }

    return (
      <div id='carouselbox' className={classes.itemHolder}>
        <div className={classes.reasonsGrid} style={carouselBoxStyle}>
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
      </div>
    )
  }

  getLeftControl = () => {
    return <div className={classes.controlButton} onClick={(e) => { this.onChangeItem(-1) }}><img src='/images/icons/union-left.svg' alt='left' /></div>
  }

  getRightControl = () => {
    return <div className={classes.controlButton} onClick={(e) => { this.onChangeItem(1) }}><img src='/images/icons/union-right.svg' alt='right' /></div>
  }

  render () {
    return (
      <div id='component-carousel-section' className={`full-width ${classes.sectionComponent}`}>

        <div className={classes.contentContainer}>
          <div className={classes.headingBlock}>
            <h2>{this.props.title}</h2>
            <p>{this.props.body}</p>
          </div>

          {
            this.props.screenDimensions.width > MOBILE_BREAK_WIDTH ?
            <input type='submit' className={`button primary big ${classes.arrangeDemoButton}`} value='Arrange a demo'/> :
            null
          }

          <div className={classes.carouselHolder}>
            {
              this.props.screenDimensions.width >= MOBILE_BREAK_WIDTH ? this.getLeftControl() : null
            }
            {
              this.getItemHolder()
            }
            {
              this.props.screenDimensions.width >= MOBILE_BREAK_WIDTH ? this.getRightControl() : null
            }
            {
              this.props.screenDimensions.width < MOBILE_BREAK_WIDTH ?
              <div className={classes.controlHolder}>
                { this.getLeftControl() }
                <div className='spacer' />
                { this.getRightControl() }
              </div> :
              null
            }
          </div>
        </div>

      </div>
    )
  }
}

export default CarouselSection
