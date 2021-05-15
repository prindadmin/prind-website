import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Tools

// leftCols = width of left side (out of 12)
// rightCols = width of right side (out of 12)
// leftCols + rightCols must equal 12

export class SideBySide extends Component {
static propTypes = {
  backgroundColor: PropTypes.string,
  leftCols: PropTypes.number.isRequired,
  rightCols: PropTypes.number.isRequired,
  leftSide: PropTypes.func.isRequired,
  rightSide: PropTypes.func.isRequired,
}

  render () {

    const { leftCols, rightCols, backgroundColor, leftSide, rightSide } = this.props

    var componentStyle = {}

    if (backgroundColor !== null) {
      componentStyle = { backgroundColor: backgroundColor }
    }

    var leftColsChecked = leftCols
    var rightColsChecked = rightCols

    // Check that there are only 12 columns specified
    if (leftCols + rightCols !== 12) {
      leftColsChecked = 6
      rightColsChecked = 6
    }

    return (
      <div id='component-side-by-side' className='row' style={componentStyle}>
        <div className="component-side-by-side-container row">
          <div className={`left-side-container col-md-${leftColsChecked} col-sm-12`}>
            {leftSide()}
          </div>

          <div className={`right-side-container col-md-${rightColsChecked} col-sm-12`}>
            {rightSide()}
          </div>

        </div>
      </div>
    )
  }
}

export default SideBySide
