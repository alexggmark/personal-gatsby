import React from 'react'
import './portfolioBlock.scss'
import arrow from './assets/arrow.svg'

export default class PortfolioBlock extends React.Component {
  render () {
    return (
      <div className="portfolio-block" js-visibility>
        <div className="portfolio-block__container">
          <div className="portfolio-block__image">
            <div className="portfolio-block__image-img" style={{backgroundImage: 'url(' + this.props.data.node.image.url + ')'}} />
          </div>
          <div className="portfolio-block__data">
            <h5 className="h2 portfolio-block__title">
              {this.props.data.node.title}
            </h5>
            <div className="portfolio-block__technologies">
              {this.props.data.node.technologies.map((subitem, index) => (
                <img src={subitem.image.url} width="36px" />
                ))}
            </div>
          </div>
          <div className="portfolio-block__content">
            <p className="portfolio-block__description">
              {this.props.data.node.description}
            </p>
            <div className="portfolio-block__button-container">
              {this.props.data.node.githublink ? (
                <a
                  className="portfolio-block__button h2"
                  href={this.props.data.node.githublink}
                  target="_BLANK"
                >
                  Github
                  <img className="portfolio-block__arrow" src={arrow} />
                </a>
              ) : ''}
              <a
                className="portfolio-block__button h2"
                href={this.props.data.node.sitelink}
                target="_BLANK"
              >
                View Project
                <img className="portfolio-block__arrow" src={arrow} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}