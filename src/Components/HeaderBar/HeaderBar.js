import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const FADE_IN_DISTANCE = 400

// Components

// TODO: Get the links on the right hand side (when we have some)

export class HeaderBar extends Component {
  static propTypes = {
    companyName: PropTypes.string.isRequired,
  }

  constructor() {
    super()
    this.state = {
      opacity: 0
    }
  }

  componentDidMount () {

    const that = this

    window.onscroll = function() {
      var opacity = 1;
      if ( window.pageYOffset < FADE_IN_DISTANCE ) {
        opacity = window.pageYOffset / FADE_IN_DISTANCE
      }

      that.setState({
        opacity
      })
    }
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  render () {

    const { companyName } = this.props
    const { opacity } = this.state

    const style = { opacity: opacity }

    return (
      <div id='header-bar' className='col-12' style={style}>
        <div className='header-container col-12'>
          <div className='company-name col-3'>
            <Link to='/'>
              <h1>{ companyName }</h1>
            </Link>
          </div>
          <div className='nav-links col-3'>
            {/*this.getMenu()*/}
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderBar
