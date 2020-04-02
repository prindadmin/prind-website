import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class SingleNumberTile extends Component {
  static propTypes = {
    headlineNumber: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }


  render() {
    const { headlineNumber, title, description } = this.props

    return (
      <div className="single-number-tile">
        <div className="headline-number">
          {headlineNumber + "."}
        </div>
        <div className="title">
          {title}
        </div>
        <div className="description">
          {description}
        </div>
      </div>
    )
  }
}

export default SingleNumberTile
