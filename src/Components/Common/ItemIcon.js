import React from 'react'
import PropTypes from 'prop-types'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/*
import {
  faClipboardList,
  faFlag,
  faQuestionCircle,
  faToolbox,
  faBuilding,
  faCog,
  faCheckCircle,
  faAddressCard,
  faUserEdit,
  faUserMinus,
  faUserPlus,
  faInfoSquare,
  faSitemap
} from '@fortawesome/pro-light-svg-icons'

import {
  faPlusCircle,
  faExclamationTriangle,
  faGlobeAmericas,
  faFilePdf,
  faAbacus,
  faLockAlt,
  faLayerPlus,
  faChartNetwork,
  faClipboardListCheck,
  faCloud,
  faPlay,
} from '@fortawesome/pro-regular-svg-icons'

import {
  faArrowAltRight,
  faArrowAltLeft,
  faArrowAltUp,
  faArrowAltDown,
  faRedoAlt,
  faCircle,
  faWalking,
  faDownload,
  faUserCog,
  faWarehouseAlt,
  faBars,
  faGem,
  faBracketsCurly,
 } from '@fortawesome/pro-solid-svg-icons'
*/

import {
  faBroadcastTower,
  faCircle,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons'

import {
  faFlag,
} from '@fortawesome/free-regular-svg-icons'

import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

let icons = {
  facebook: faFacebookSquare,
  twitter: faTwitterSquare,
  linkedin: faLinkedin,
  broadcastTower: faBroadcastTower,
  landmark: faLandmark,
  flag: faFlag,
  circle: faCircle,
}

const ItemIcon = props => {

  const ico = <FontAwesomeIcon
                icon={icons[props.icon]}
                size={props.size}
                color={props.color}
              />

  return (
    <React.Fragment>
      { ico }
    </ React.Fragment>
  )
}

ItemIcon.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  color: PropTypes.string
}

export default ItemIcon
