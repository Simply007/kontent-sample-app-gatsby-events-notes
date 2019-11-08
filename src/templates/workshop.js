import React from "react"
import { graphql } from "gatsby"

const Workshop = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query workshopQuery($slug: String!){
    allKontentItemWorkshop(filter: {fields: {slug: {eq: $slug}}}) {
      nodes {
        elements {
          event_info__name {
            value
          }
        }
      }
    }
  }
`

export default Workshop