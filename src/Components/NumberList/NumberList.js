import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Libraries
import Fade from 'react-reveal/Fade';

// Components
import { SingleNumberTile } from './elements'

// TODO: If less than 4 items for XL, show tiles with col-xl-4

export class NumberList extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    title: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
      })
    ).isRequired,
  }

  render () {

    const { backgroundColor, title, items } = this.props

    var componentStyle = {}

    if (backgroundColor !== null) {
      componentStyle = { backgroundColor: backgroundColor }
    }

    return (
      <div id='component-number-list' className='row' style={componentStyle}>
        <div className='component-number-list-container flex-center-content row'>
          <div className="title row">
            {title}
          </div>
          <div className="items row">
            {
              items.map((numberDetails, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-12 item">
                  <Fade bottom distance="60px">
                    <SingleNumberTile
                      headlineNumber={index + 1}
                      {...numberDetails}
                    />
                  </Fade>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default NumberList
