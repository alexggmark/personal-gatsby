import React from 'react'
import './navigation.scss'

export default class Navigation extends React.Component {
  render () {
    return (
      <navigation className="navigation">
        <div className="navigation__container">
          <a href="#" className="h2">Github</a>
          <a href="#" className="h2">LinkedIn</a>
        </div>
      </navigation>
    )
  }
}