import React, { Component } from 'react'
import PropTypes from 'prop-types'

// TODO: Add prop to accept an array of images and have them rotate through

export class Hero extends Component {
static propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}

  componentDidMount () {
  }


  getHeroImage = () => {

    const imageLocation = "/images/hero/"
    const imageName = "hero-7"
    const fileType = ".jpg"

    const defaultImage = imageLocation + imageName + "_1920" + fileType

    /*
    const srcSet =  imageLocation + imageName + "_480" + fileType + " 480w, " +
                    imageLocation + imageName + "_640" + fileType + " 640w, " +
                    imageLocation + imageName + "_960" + fileType + " 960w, " +
                    imageLocation + imageName + "_1280" + fileType + " 1280w, " +
                    imageLocation + imageName + "_1920" + fileType + " 1920w"

    const sizes = "(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 960px) 100vw, (max-width: 1280px) 100vw, 100vw"
    */

    return (
      <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${defaultImage})`}} className="fill fill-parent">
      </div>
    )

  }

  render () {

    const { title, subtitle } = this.props

    return (
      <div id='component-hero' className='full-width'>
        <div className='image-container full-height full-width'>
          {
            this.getHeroImage()
          }
        </div>

        <div className='text-container'>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </div>

      </div>
    )
  }
}

export default Hero
