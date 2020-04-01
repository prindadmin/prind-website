import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class FeatureCircle extends Component {
  static propTypes = {
    details: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      iconName: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired,
  }

  render () {

    const { title, subtitle } = this.props.details

    return (
      <div id='component-feature-circle' className='col-xl-4 col-lg-6 col-md-12'>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </div>
    )
  }
}

export default FeatureCircle
