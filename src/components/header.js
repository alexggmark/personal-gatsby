import React from 'react'
import VisibilitySensor from '../components/visiblity'
import './header.scss'
import bird from './assets/bird.svg'

export default class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div className="header__block header__block--main">
          <div className="header__block-inner">
            <h1 className="h1 header__logo">
              Alex Grønmark
            </h1>
            <h2 className="h2 header__subtitle">
              Web Developer
            </h2>
          </div>
        </div>
        <div className="header__block header__block--image">
          <img className="header__icon" src={bird} />
        </div>
        <div className="header__block header__block--description">
          <p className="header__description">
            The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href
          </p>
        </div>
      </header>
    )
  }
}