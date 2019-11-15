import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from 'gatsby-theme-material-ui';
import Typography from '@material-ui/core/Typography';
import { navigate } from "gatsby"; import Box from '@material-ui/core/Box';


const Thumbnail = ({ title, summary, imageUri, imageTitle, url, actions }) => {
  const cardIcons = actions && actions.map(action => (
    <Button key={action.url} size="small" color="primary" href={action.url}>
      {action.title}
    </Button>
  ));

  return (
    <Box p={1}>
      <Card>
        <Box p={1}>
          <CardActionArea onClick={() => url && navigate(url)}>
            {imageUri
              && imageTitle
              && (
                <Box p={1}>
                  <CardMedia
                    component="img"
                    image={imageUri}
                    title={imageTitle} />
                </Box>
              )}
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: summary }}>
              </Typography>
            </CardContent>
          </CardActionArea>
          {cardIcons && <CardActions>{cardIcons}</CardActions>}
        </Box>
      </Card>
    </Box>
  );
};

export default Thumbnail;