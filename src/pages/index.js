import React from "react";
import { graphql } from "gatsby";
import { Container, Box, Typography, Link } from "@material-ui/core";

import Conference from '../components/conference';

const HomePage = ({ data }) => {

  const {
    allKontentItemConference: {
      nodes: conferences
    },
    allSitePage: {
      nodes: pagesData
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
      <Conference
        key={conferenceId}
        name={conferenceName}
        url={conferenceUrl}
        items={conferenceItems}
      />
    );
  });

  const pages = pagesData.map(pageData => 
    <li key={pageData.id}><Link href={pageData.path}>{pageData.path}</Link></li>
  );

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
      <Typography variant="h5" component="h2" gutterBottom>
        All Pages
      </Typography>
      {pages}
    </Container>
  )
};

export const query = graphql`
{
  allSitePage {
    nodes {
      id
      path
    }
  }
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
