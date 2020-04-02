import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class HeadlineNumberTile extends Component {
  static propTypes = {
    headlineNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
  }


  render() {
    const { headlineNumber, description } = this.props

    return (
      <div className="headline-number-tile">
        <div className="headline-number">
          {headlineNumber}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
    )
  }
}

export default HeadlineNumberTile
