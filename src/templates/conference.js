import React from "react"
import { graphql } from "gatsby"

const Conference = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query conferenceQuery($slug: String!){
    allKontentItemConference(filter: {fields: {slug: {eq: $slug}}}) {
      nodes {
        elements {
          name {
            value
          }
        }
      }
    }
  }
`

export default Conference