import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Libraries
import Fade from 'react-reveal/Fade';

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
        <Fade bottom distance="60px">
          <div className='circle-container'>
            <span className="fa-layers fill-parent">
              <div className="shadow">
                {circle}
              </div>
              {ico}
            </span>
          </div>
          <h2>{title}</h2>
          <h4>{subtitle}</h4>
          <p>{description}</p>
        </Fade>
      </div>
    )
  }
}

export default FeatureCircle
