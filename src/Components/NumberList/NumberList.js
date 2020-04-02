import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import { SingleNumberTile } from './elements'


// Tools
import Fade from 'react-reveal/Fade';

export class NumberList extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
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
      <div id='component-number-list' className='row' style={componentStyle}>
        <div className='component-number-list-container flex-center-content'>
          {
            items.map((numberDetails, index) => (
              <div key={index} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Fade bottom distance="40px">
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
    )
  }
}

export default NumberList
