import React from "react";
import { graphql } from "gatsby";
import { Container, Box, Typography, Link } from "@material-ui/core";

import Thumbnail from "../components/thumbnail";

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
        description: { value: conferenceDescription },
        logo: {
          url: conferenceLogoUrl,
          name: conferenceLogoName
        }
      },
      fields: {
        slug: conferenceSlug
      }
    } = conference;
    return (
      <Thumbnail
        title={conferenceName}
        summary={conferenceDescription}
        imageUri={conferenceLogoUrl}
        imageTitle={conferenceLogoName}
        url={`/conferences/${conferenceSlug}`}
        key={conferenceId}
        name={conferenceName}
        actions={[
          {
            title: "Official info",
            url: conferenceUrl 
          }
        ]}
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
  allKontentItemConference(limit: 3) {
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
            name
          }
        }
        description {
          value
        }
        location {
          value
        }
      }
      fields {
        slug
      }
    }
  }
}
`

export default HomePage
