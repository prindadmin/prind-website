import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classes from './HeaderBar.module.css'
import { Link } from "react-router-dom";

import * as Strings from '../../Data/Strings'

const FADE_IN_DISTANCE = 400
const MOBILE_BREAKPOINT = 800

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
      opacity: 0,
      width: 0,
      height: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.onscroll = null;
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  // Stores the current screen size in the components state
  updateWindowDimensions() {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }

  getMenu = () => {
    return (
      <Fragment>
        <div className="menu-element"><Link to='/'>{Strings.MENU_HOME}</Link></div>
        <div><Link to='/procore-support'>{Strings.MENU_SUPPORT}</Link></div>
      </Fragment>
    )
  }

  getLogoSrc = () => {
    if (this.state.width < MOBILE_BREAKPOINT) {
      return "/images/logos/prind-tech-icon-blue.png"
    }
    return "/images/logos/prind-tech-logo-white-text.png"
  }

  render () {
    const { opacity } = this.state
    const style = this.props.fadeIn ? { opacity: opacity } : { opacity: 1, position: "relative" }

    return (
      <div id='header-bar' style={style}>
        <div className='header-container'>
          <div className={classes.companyName} >
            <Link to='/'>
              <img src={this.getLogoSrc()} alt="" />
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
