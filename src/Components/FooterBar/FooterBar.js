import React, { Component } from 'react'
//import PropTypes from 'prop-types'

// Components
import SocialLinks from '../SocialLinks'

// Data
import * as Strings from '../../Data/Strings'

// TODO: Add menu items

export class FooterBar extends Component {
  static propTypes = {
  }


  render () {

    return (
      <div id='footer-bar' className='col-12'>
        <div className='footer-container col-12'>
          <div className='social-links col-12'>
            <SocialLinks />
          </div>
          <div className='legal'>
            { Strings.COPYRIGHT_TEXT }
          </div>
        </div>
      </div>
    )
  }
}

export default FooterBar
