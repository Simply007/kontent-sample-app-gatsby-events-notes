import React from "react";
import { graphql } from "gatsby";
import { Container, Box, Typography } from "@material-ui/core";

import Event from '../components/event';

const HomePage = ({ data }) => {

  const {
    allKontentItemConference: {
      nodes: conferences
    }
  } = data;


  const conferencesComponents = conferences.map(conference => {
    const {
      system: {
        id: conferenceId
      },
      elements: {
        name: { value: conferenceName },
        url: { value: conferenceUrl },
        events: {
          linked_items: conferenceItems
        }
      }
    } = conference;
    return (
      <Event
        key={conferenceId}
        name={conferenceName}
        url={conferenceUrl}
        items={conferenceItems}
      />
    );
  });

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Conferences & Meetups
      </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Conferences
      </Typography>
        {conferencesComponents}
      </Box>
    </Container>
  )
};

export const query = graphql`
{
  allKontentItemConference {
    nodes {
      system {
        id
      }
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

export default HomePage
