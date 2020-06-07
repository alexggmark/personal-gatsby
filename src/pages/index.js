import React from 'react'
import { graphql } from 'gatsby'
import VisibilitySensor from '../components/visiblity'

class ProjectBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  render () {
    return (
      <div
        className={`portfolio__block ${this.state.visible ? 'active' : ''}`}
        onChange={(isVisible) => {
          this.setState({ visible: isVisible })
        }}
      >
        <p>{this.props.data.title}</p>
        <p>{this.props.data.description}</p>
        <img width="100px" src={this.props.data.image.url} />
        {this.props.data.technologies.map((item, index) => {
          return (
            <div key={'tech' + index}>
              <img width="50px" src={item.image.url} />
            </div>
          )
        })}
      </div>
    )
  }
}

const Home = ({ data }) => {
  console.log(data)
  return (
    <div>
      {
        data.allDatoCmsPortfolioproject.edges.map((item, index) => {
          return (
            <VisibilitySensor key={'block' + index}>
              <ProjectBlock data={item.node} />
            </VisibilitySensor>
          )
        })
      }
    </div>
  )
}

export default Home

export const query = graphql`
  query MyQuery {
    allDatoCmsPortfolioproject {
      edges {
        node {
          title
          description
          githublink
          sitelink
          image {
            url
          }
          technologies {
            image {
              url
            }
          }
        }
      }
    }
  }
`
