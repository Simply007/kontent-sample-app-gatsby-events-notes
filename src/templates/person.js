import React from "react"
import { graphql } from "gatsby"

const Person = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  query personQuery($slug: String!){
    allKontentItemPerson(filter: {fields: {slug: {eq: $slug}}}) {
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

export default Person