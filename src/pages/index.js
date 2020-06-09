import React from 'react'
import { graphql } from 'gatsby'
import VisibilitySensor from '../components/visiblity'
import Header from '../components/header'
import PortfolioBlock from '../components/portfolioBlock'
import './index.scss'

class Home extends React.Component {
  render () {
    return (
      <div>
        <VisibilitySensor>
          <Header />
        </VisibilitySensor>
        {
          this.props.data.allDatoCmsPortfolioproject.edges.map((item, index) => {
            return (
              <VisibilitySensor
                key={'portfolioblock' + index}
              >
                <PortfolioBlock data={item} />
              </VisibilitySensor>
            )
          })
        }
        {
          this.props.data.allDatoCmsPortfolioproject.edges.map((item, index) => {
            return (
              <VisibilitySensor
                key={'portfolioblock' + index}
              >
                <PortfolioBlock data={item} />
              </VisibilitySensor>
            )
          })
        }
        {
          this.props.data.allDatoCmsPortfolioproject.edges.map((item, index) => {
            return (
              <VisibilitySensor
                key={'portfolioblock' + index}
              >
                <PortfolioBlock data={item} />
              </VisibilitySensor>
            )
          })
        }
      </div>
    )
  }
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
