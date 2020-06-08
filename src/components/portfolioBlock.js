import React from 'react'
import './portfolioBlock.scss'
import arrow from './assets/arrow.svg'

export default class PortfolioBlock extends React.Component {
  render () {
    return (
      <div className="portfolio-block">
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
                <img src={subitem.image.url} width="40px" />
                ))}
            </div>
          </div>
          <div className="portfolio-block__content">
            <p className="portfolio-block__description">
              {this.props.data.node.description}
            </p>
            <div className="portfolio-block__button-container">
              <a
                className="portfolio-block__button h2"
                href="#"
              >
                Button 1
                <img className="portfolio-block__arrow" src={arrow} />
              </a>
              <a
                className="portfolio-block__button h2"
                href="#"
              >
                Button 2
                <img className="portfolio-block__arrow" src={arrow} />
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}