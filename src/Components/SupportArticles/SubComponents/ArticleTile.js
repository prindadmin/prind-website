import { Component } from 'react'
import PropTypes from 'prop-types'
import classes from './ArticleTile.module.css'

// Data
import * as Strings from '../../../Data/Strings'

export class ArticleTile extends Component {
  static propTypes = {
    details: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }),
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired
  }

  render () {
    const articleLocation = `${this.props.location.pathname}/${this.props.details.id}`

    return (
      <div className={classes.tile}>
        <div className={classes.title}>
          { this.props.details.title }
        </div>
        <div className={classes.content}>
          { this.props.details.description }
        </div>
        <div className={classes.readMore} onClick={(e) => this.props.history.push(articleLocation)}>
          { Strings.READ_MORE }
        </div>
      </div>
    )
  }
}

export default ArticleTile
