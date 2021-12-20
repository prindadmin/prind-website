import React, { Component } from 'react'

// Tools
import ReactGA from 'react-ga';

import * as STRINGS from '../../Data/Strings'

// Components
import ArrangeDemo from '../../Components/ArrangeDemo'

export class ArrangeDemoPage extends Component {

  constructor() {
    super()
    this.state = {
      screenDimensions: {
        width: 0,
        height: 0
      }
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }

  componentDidMount() {
    // Register pageview with GA
    ReactGA.pageview("/");
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      screenDimensions: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  // TODO: Build this page

  render () {
    return (
      <div id='arrange-demo-page' className='page full-width'>
        <ArrangeDemo
          reference='arrangedemo'
          screenDimensions={ this.state.screenDimensions }
        />
      </div>
    )
  }
}

export default ArrangeDemoPage
