import React from "react"
import { graphql } from "gatsby"

const Presentation = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query presentationQuery($slug: String!){
    allKontentItemPresentation(filter: {fields: {slug: {eq: $slug}}}) {
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

export default Presentation