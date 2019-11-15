import React from "react"
import { graphql } from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Thumbnail from "components/Thumbnail";
import Box from '@material-ui/core/Box';



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

  const presentations = conferenceEvents
    .filter(event => event.__typename === 'KontentItemPresentation')
    .filter(event => event.fields.slug)
    .map(presentation => {
      const {
        fields: {
          slug: presentationSlug
        },
        elements: {
          event_info__name: {
            value: presentationName
          },
          event_info__description: {
            resolvedData: {
              html: presentationDescription
            }
          },
        }
      } = presentation;

      return (
        <Thumbnail
          key={presentationSlug}
          title={presentationName}
          summary={presentationDescription}
          url={`/presentations/${presentationSlug}`}
        />)
    });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box p={2}>
          <Typography variant="h5" component="h3">
            {conferenceName}
          </Typography>
          <Box>
            <Typography component="div"  >
              <div dangerouslySetInnerHTML={{ __html: conferenceDescription }} />
            </Typography>
          </Box>
        </Box>
        <Box>
          {presentations}
        </Box>
      </Container >
    </React.Fragment>
  );
}

export const query = graphql`
query conferenceQuery($slug: String!) {
  kontentItemConference(fields: {slug: {eq: $slug}}, elements: {url_slug: {value: {ne: ""}}}) {
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