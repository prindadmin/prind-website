import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import classes from './SupportArticlePage.module.css'

// Tools
import ReactGA from 'react-ga';

// Data
import Articles from '../../Data/SupportArticles'
import { Strings } from '../../Data'
//import ArticleContent from '../../Data/SupportArticleContent'

// Components
import HeaderBar from '../../Components/HeaderBar'
import ErrorBoundary from '../../Components/ErrorBoundary'


export class SupportArticlePage extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      content: <p>"Loading..."</p>
    }
  }

  componentDidMount() {
    // Register pageview with GA
    ReactGA.pageview(this.props.location.pathname);
    //this.articleContent()
  }
  /*
  // TODO: Create a prettier "article not found" display
  articleContent = () => {
    const { id } = this.props.match.params
    if (!id) {
      this.setState({
        content: <p>Article not found</p>
      })
      return;
    }
    this.getContentFromFolder(id)
  }

  getContentFromFolder = (file) => {
    this.setState({
      content: ArticleContent[file]
    })
  }
  */

  getArticleTitle = () => {
    const currentArticle = Articles.filter(article => article.id === this.props.match.params.id)
    return currentArticle[0].title
  }

  getDownloadAppArticle = () => {
    return (
      <Fragment>
        <b><p>What is the Foundations App?</p></b>
        <p>The Foundations App is a smartphone and tablet app that allows you to sign documents securely from your device.</p>
        <p>The mobile app uses your device's built-in security system to ensure that your signature can only be generated from your device.  Don't worry if you have multiple devices, each device can have it's own secure signature connected to your account.</p>
        <b><p>Where can I get the Mobile App?</p></b>
        <p>Click the button below that matches your devices operating system</p>

        <a className="appIcon" href="https://play.google.com/store/apps/details?id=com.buildingim.foundations" target="_blank" rel="noreferrer">
          <img className="appIcon" src="/images/other/download-android.png" alt="Android app link" />
        </a>

        <a className="appIcon" href="https://apps.apple.com/us/app/foundations/id1499177355#?platform=iphone" target="_blank" rel="noreferrer">
          <img className="appIcon" src="/images/other/download-ios.png" alt="iOS app link" />
        </a>
      </Fragment>
    )
  }

  getAnchorDocumentArticle = () => {
    return (
      <Fragment>
        <b><p>What is Anchoring a Document?</p></b>
        <p>When a document is anchored with Foundations, the documents 'fingerprint' is taken and stored as an entry in a blockchain.</p>
        <p>This entry in the blockchain can be used to check if the file in your posession is the same as the one that was anchored in the blockchain; even a single character or formatting change will be detected.</p>
        <p>Blockchain entries are permanent and cannot be modified, providing the perfect audit trail for any document.</p>
        <b><p>How do I Anchor a Document?</p></b>
        <p>1) When using Procore, open the Foundations Embedded App:</p>
        <img className="supportImg" src="/images/support/support-anchorDocument-1.png" alt="Procore Open Foundations App" />
        <p>2) Navigate to the file you want to anchor.</p>
        <p>3) Click the 'Anchor' button next to the file you want to anchor:</p>
        <img className="supportImgWide" src="/images/support/support-anchorDocument-2.png" alt="Foundations App Anchor File" />
        <p>4) The icon on the anchor button will spin.  After a few seconds, the button will say 'View Anchor'.  Clicking the button now will show you the blockchain entry for the file.</p>
        <img className="supportImgSmall" src="/images/support/support-anchorDocument-3.png" alt="Foundations App View Anchor" />
      </Fragment>
    )
  }

  getSignDocumentArticle = () => {
    return (
      <Fragment>
        <b><p>What is Signing a Document?</p></b>
        <p>Once a document is anchored with Foundations, the document can be 'signed' digitally.  This signature is added to a blockchain.</p>
        <p>The signature on the blockchain does not reveal who the signer is, that information is only available within Foundations.  The signature identifies the exact device that signed the document, creating a secure and verifiable audit trail of signatures.</p>
        <p>To sign a document, you will need to have installed the Foundations mobile app as well as the Foundations app within Procore.</p>
        <b><p>Where can I get the Mobile App?</p></b>
        <p>Click the button below that matches your devices operating system</p>

        <a className="appIcon" href="https://play.google.com/store/apps/details?id=com.buildingim.foundations" target="_blank" rel="noreferrer">
          <img className="appIcon" src="/images/other/download-android.png" alt="Android app link" />
        </a>

        <a className="appIcon" href="https://apps.apple.com/us/app/foundations/id1499177355#?platform=iphone" target="_blank" rel="noreferrer">
          <img className="appIcon" src="/images/other/download-ios.png" alt="iOS app link" />
        </a>

        <b><p>How do I Sign a Document?</p></b>
        <p>1) When using Procore, open the Foundations Embedded App:</p>
        <img className="supportImg" src="/images/support/support-signDocument-1.png" alt="Procore Open Foundations App" />
        <p>2) Navigate to the file you want to sign.</p>
        <p>3) Click the 'Sign' button next to the file you want to sign:</p>
        <img className="supportImgWide" src="/images/support/support-signDocument-2.png" alt="Foundations App Sign File" />
        <p>4) The icon on the sign button will spin.  After a few seconds, the button will say 'Sign' again.  You should soon receive a Foundations notification on your mobile device.</p>
        <p>5) Open the app and you will see the requests list.  Click on the request to see the request details.</p>
        <img className="supportImgSmall" src="/images/support/support-signDocument-3.png" alt="Foundations Mobile App Sign Notification" />
        <p>6) You can now see the details of the request and accept or reject the request</p>
        <img className="supportImgSmall" src="/images/support/support-signDocument-4.png" alt="Foundations Mobile App Sign Details" />
      </Fragment>
    )
  }

  getContent = (id) => {
    if (id === 'downloadApp') {
      return this.getDownloadAppArticle()
    }
    if (id === 'anchorDocument') {
      return this.getAnchorDocumentArticle()
    }
    if (id === 'signDocument') {
      return this.getSignDocumentArticle()
    }
    return <p>Article not found</p>
  }

  render () {
    /*
    var content = this.state.content
    console.log(content)
    if (content.props) {
      content = this.state.content.props.children
    }
    console.log(content)
    */
    console.log(this.props)
    var content = this.getContent(this.props.match.params.id)

    return (
      <div id='support-article-page'>
        <HeaderBar companyName={Strings.HEADER_COMPANY_NAME} fadeIn={false} />
        <div id='support-article-page' className={classes.container}>
          <ErrorBoundary onRetry={function(){}}>
            <div className={classes.title}>
              <h3>{ this.getArticleTitle() }</h3>
            </div>
            <div className={classes.content} >
              { content }
            </div>
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}

export default SupportArticlePage
