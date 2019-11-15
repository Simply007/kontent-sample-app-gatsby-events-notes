import React from "react"
import { graphql } from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const Conference = ({ data }) => {
  const {
    kontentItemConference: {
      elements: {
        name: {
          value: conferenceName
        },
        description: {
          resolvedData: {
            html: conferenceDescription
          }
        },
        events: {
          linked_items: conferenceEvents
        }
      }
    }
  } = data;



  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Paper>
          <Typography variant="h5" component="h3">
            {conferenceName}
          </Typography>
          <Paper>
            <Typography component="p" dangerouslySetInnerHTML={{ __html: conferenceDescription }} />
          </Paper>
        </Paper>
        <Paper>
          <pre>{JSON.stringify(conferenceEvents, null, 4)}</pre>
        </Paper>
      </Container >
    </React.Fragment>
  );
}

export const query = graphql`
query conferenceQuery($slug: String!) {
  kontentItemConference(fields: {slug: {eq: $slug}}) {
    elements {
      name {
        value
      }
      description {
        resolvedData {
          html
        }
      }
      logo {
        value {
          name
          url
        }
      }
      location {
        value
      }
      events {
        linked_items {
          ... on KontentItemPresentation {
            fields {
              slug
            }
            elements {
              event_info__name {
                value
              }
              notes {
                resolvedData {
                  html
                }
              }
              event_info__description {
                resolvedData {
                  html
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

export default Conference