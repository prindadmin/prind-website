import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Components
import FeatureCircle from '../FeatureCircle'

export class FeatureCircles extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    backgroundColor: PropTypes.string,
    featuresDetails: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string,
        iconName: PropTypes.string.isRequired,
        description: PropTypes.string,
      })
    ).isRequired,
  }

  getFeatureCircles = () => {

    const { featuresDetails } = this.props

    return (
      <React.Fragment>
        {
          featuresDetails.map((feature, index) => (
            <FeatureCircle
              key={index}
              details={feature}
            />
          ))
        }
      </React.Fragment>
    )
  }


  render () {

    const { title, subtitle, backgroundColor } = this.props

    var componentStyle = {}

    if (backgroundColor !== null) {
      componentStyle = { backgroundColor: backgroundColor }
    }

    return (
      <div id='component-feature-circles' style={componentStyle}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <div className='feature-circles row flex-center-content'>
          {
            this.getFeatureCircles()
          }
        </div>
      </div>
    )
  }
}

export default FeatureCircles
