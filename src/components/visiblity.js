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
        console.log(entry.intersectionRatio)
        if (entry.intersectionRatio > 0.5) {
          this.setState({ isActive: true })
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
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


