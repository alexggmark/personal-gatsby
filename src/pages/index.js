import React from 'react'

const Home = ({ data }) => {
  console.log(data)
  return (
    <div>
      {
        data.allDatoCmsBagel.edges.map((item, index) => {
          return <div key={index}>
            <h1>{item.node.title}</h1>
            <p>{item.node.content}</p>
          </div>
        })
      }
    </div>
  )
}

export default Home

export const query = graphql`
  query MyQuery {
    allDatoCmsBagel {
      edges {
        node {
          title
          content
        }
      }
    }
  }
`
