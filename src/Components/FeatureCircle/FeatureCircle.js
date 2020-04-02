import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ItemIcon from '../Common/ItemIcon'

const defaultColour = '#194174'
const hoverColour = '#286abf'

export class FeatureCircle extends Component {
  static propTypes = {
    details: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string,
      iconName: PropTypes.string.isRequired,
      description: PropTypes.string,
    }).isRequired,
  }

  onMouseEnter = event => {
    console.log("mouseover fired")
    const el = event.target
    el.style.color = hoverColour;
  }

  onMouseLeave = event => {
    const el = event.target
    el.style.color = defaultColour;
  }

  render () {

    const { title, subtitle, iconName, description } = this.props.details

    const ico  = <ItemIcon size='4x' icon={iconName} color='white'/>
    const circle  = <ItemIcon size='8x' icon='circle' color={defaultColour}/>

    return (
      <div id='component-feature-circle' className='col-xl-4 col-lg-6 col-md-12'>
        <div className='circle-container'>
          <span className="fa-layers fill-parent">
            <div className="shadow">
              {circle}
            </div>
            {ico}
          </span>
        </div>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p>{description}</p>
      </div>
    )
  }
}

export default FeatureCircle
