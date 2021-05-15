import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

import * as Strings from '../../Data/Strings'

const FADE_IN_DISTANCE = 400

// Components

// TODO: Change to logo icon when width is small
// TODO: Change menu to icon when width is small
// TODO: Get the links on the right hand side (when we have some)

export class HeaderBar extends Component {
  static propTypes = {
    companyName: PropTypes.string.isRequired,
    fadeIn: PropTypes.bool.isRequired
  }

  constructor() {
    super()
    this.state = {
      opacity: 0
    }
  }

  componentDidMount () {
    window.onscroll = function() {
      var opacity = 1;
      if ( window.pageYOffset < FADE_IN_DISTANCE ) {
        opacity = window.pageYOffset / FADE_IN_DISTANCE
      }
      this.setState({
        opacity
      })
    }.bind(this)
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  getMenu = () => {
    return (
      <Fragment>
        <div className="menu-element"><Link to='/'>{Strings.MENU_HOME}</Link></div>
        <div><Link to='/procore-support'>{Strings.MENU_SUPPORT}</Link></div>
      </Fragment>
    )
  }


  render () {

    const { companyName } = this.props
    const { opacity } = this.state

    const style = this.props.fadeIn ? { opacity: opacity } : { opacity: 1, position: "relative" }

    return (
      <div id='header-bar' style={style}>
        <div className='header-container'>
          <div className='company-name'>
            <Link to='/'>
              <h1>{ companyName }</h1>
            </Link>
          </div>
          <div className='nav-links'>
            { this.getMenu() }
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderBar
