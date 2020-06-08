import React from 'react'

export default class VisiblitySensor extends React.Component {
  constructor(props) {
    super(props)
    this.element = React.createRef()
    this.state = {
      isActive: false
    }
  }

  async componentDidMount() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio === 1) {
          this.setState({ isActive: true })
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 1.0
      }
    )

    if (this.element.current) {
      observer.observe(this.element.current)
    }
  }

  render () {
    return (
      <div
        ref={this.element}
        className={this.state.isActive === true && 'is-active'}
      >
        {this.props.children}
      </div>
    )
  }
}


