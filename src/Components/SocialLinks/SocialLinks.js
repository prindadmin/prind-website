import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import classes from './SocialLinks.module.css'

// Components
import { SingleSocialLink } from './elements'

// Data
import socialData from '../../Data/SocialData'

export class SocialLinks extends Component {
  static propTypes = {
  }


  render () {

    return (
      <div id='social-links-container' className={classes.socialContainer}>
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

export default SocialLinks
