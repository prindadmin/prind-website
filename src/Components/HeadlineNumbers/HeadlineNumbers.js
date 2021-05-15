import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import { HeadlineNumberTile } from './elements'

// Tools

export class HeadlineNumbers extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        headlineNumber: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  render () {

    const { backgroundColor, items } = this.props

    var componentStyle = {}

    if (backgroundColor !== null) {
      componentStyle = { backgroundColor: backgroundColor }
    }

    return (
      <div id='component-headline-numbers' className='row' style={componentStyle}>
        <div className='component-headline-numbers-container flex-center-content full-width'>
          {
            items.map((numberDetails, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                <HeadlineNumberTile {...numberDetails} />
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default HeadlineNumbers
