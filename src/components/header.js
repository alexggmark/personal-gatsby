import React from 'react'
import './header.scss'

export default class Header extends React.Component {
  render () {
    return (
      <header class="header">
        <div class="header__block header__block--main">Block 1</div>
        <div class="header__block">Block 2</div>
        <div class="header__block">Block 3</div>
      </header>
    )
  }
}