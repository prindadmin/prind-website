import React from 'react'

import ItemIcon from '../../Common/ItemIcon'

const SingleSocialLink = props => {
  const { iconName, link } = props

  const ico  = <ItemIcon size='2x' icon={iconName} color='white'/>

  return (
    <div className="single-social-icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {ico}
      </a>
    </div>
  )
}

export default SingleSocialLink
