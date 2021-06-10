import React from 'react'
import classes from './SingleSocialLink.module.css'

import ItemIcon from '../../Common/ItemIcon'

const SingleSocialLink = props => {
  const { iconName, link } = props

  const ico  = <ItemIcon size='2x' icon={iconName} color='white'/>

  return (
    <div className={classes.socialIcon}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {ico}
      </a>
    </div>
  )
}

export default SingleSocialLink
