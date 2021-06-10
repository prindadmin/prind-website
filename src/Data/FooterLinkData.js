
import * as Strings from './Strings'
import * as Endpoints from './Endpoints'

const footerLinks = [
  {
    id: "home",
    displayAs: Strings.FOOTER_BAR_LINK_HOME,
    linkTo: Endpoints.DEFAULTPAGE
  },
  {
    id: "procoreSupport",
    displayAs: Strings.FOOTER_BAR_LINK_PROCORE_SUPPORT,
    linkTo: Endpoints.PROCORESUPPORTPAGE
  }
]

export default footerLinks
