import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allKontentItemConference {
      nodes {
        elements {
          url {
            value
          }
          start {
            value
          }
          name {
            value
          }
          logo {
            value {
              url
              width
              height
            }
          }
          location {
            value
          }
          events {
            linked_items {
              ... on Node {
                ... on KontentItemPresentation {
                  elements {
                    event_info__name {
                      value
                    }
                  }
                }
                ... on KontentItemWorkshop {
                  elements {
                    event_info__name {
                      value
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ComponentName
