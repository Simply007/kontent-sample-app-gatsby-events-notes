import React from "react"
import { graphql } from "gatsby"
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import RichTextElement from '../components/RichTextElement';
import { resolveContentItem } from '../utils/content-item-resolution';


const Presentation = ({ data }) => {
  const {
    kontentItemPresentation: {
      elements: {
        event_info__name: {
          value: presentationName
        },
        event_info__description: {
          value: presentationDescription
        },
        notes: {
          value: presentationNotes,
          linked_items: presentationLinkedNotes
        }
      }
    }
  } = data;

  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box p={2}>
          <Typography variant="h5" component="h3">
            {presentationName}
          </Typography>
          <Box>
            <Typography component="p" dangerouslySetInnerHTML={{ __html: presentationDescription }} />
          </Box>
        </Box>
        <Box>
          <RichTextElement
            value={presentationNotes}
            linkedItems={presentationLinkedNotes}
            resolveContentItem={resolveContentItem} />
        </Box>
      </Container >
    </React.Fragment>
  );
};

export const query = graphql`
query presentationQuery($slug: String!) {
  kontentItemPresentation(fields: {slug: {eq: $slug}}) {
    elements {
      event_info__name {
        value
      }
      event_info__description {
        resolvedData {
          html
        }
      }
      notes {
        value
        linked_items {
          ... on KontentItemHint {
            system {
              codename
              type
            }
            elements {
              info {
                value
                resolvedData {
                  html
                }
              }
              title {
                value
              }
              url {
                value
              }
            }
          }
        }
      }
    }
  }
}
`

export default Presentation