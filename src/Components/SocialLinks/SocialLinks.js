import React, { Component } from 'react'
//import PropTypes from 'prop-types'

// Components
import { SingleSocialLink } from './elements'

// Data
import socialData from '../../Data/SocialData'

export class FooterBar extends Component {
  static propTypes = {
  }


  render () {

    return (
      <div id='social-links-container' className='row flex-center-content'>
        {
          socialData.map((socialPlatform, index) => (
            <SingleSocialLink
              key={index}
              {...socialPlatform}
            />
          ))
        }


      </div>
    )
  }
}

export default FooterBar
