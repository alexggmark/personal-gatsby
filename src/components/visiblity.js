import React from 'react'

export default class VisiblitySensor extends React.Component {
  constructor(props) {
    super(props)
    this.element = React.createRef()
    this.visibility = false
  }

  detectVisibility = () => {
    const boundary = this.element.current.getBoundingClientRect()
    console.log(boundary)
  }

  render () {
    return (
      <div
        ref={this.element}
        onClick={() => this.detectVisibility()}
      >
        {this.props.children}
      </div>
    )
  }
}