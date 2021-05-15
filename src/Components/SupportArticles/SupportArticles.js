import { Component, lazy, Suspense } from 'react'
import PropTypes from 'prop-types'
import classes from './SupportArticles.module.css'

// Data
import * as Strings from '../../Data/Strings'
import Articles from '../../Data/SupportArticles'

// Conponents
const ArticleTile = lazy(() => import('./SubComponents/ArticleTileContainer'))

// TODO: Urgent: Create good suspense fallback

export class SupportArticles extends Component {
  static propTypes = {
   searchTerm: PropTypes.string.isRequired,
  }

  getArticles = () => {
    const mappedArticles = Articles.map((article, index) => {
      return <ArticleTile key={index} details={article} />
    });

    return mappedArticles
  }

  render () {
    return (
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>{ Strings.SUPPORT_ARTICLES_TITLE }</h3>
        </div>
        <div className={classes.articlesContainer} >
          <Suspense fallback={<p>Error</p>} >
            { this.getArticles() }
          </Suspense>
        </div>
      </div>
    )
  }
}

export default SupportArticles
