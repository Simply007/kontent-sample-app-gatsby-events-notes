import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from 'gatsby-theme-material-ui';
import Typography from '@material-ui/core/Typography';
import { navigate } from "gatsby";

const Thumbnail = ({ title, summary, imageUri, imageTitle, url, actions }) => {
  const cardIcons = actions.map(action => (
    <Button size="small" color="primary" href={action.url}>
      {action.title}
    </Button>
  ));

  return (
    <Card style={{ margin: '1em' }}>
      <CardActionArea onClick={() => navigate(url)}>
        <CardMedia
          component="img"
          image={imageUri}
          title={imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: summary }}>
          </Typography>
        </CardContent>
      </CardActionArea>
      {cardIcons && <CardActions>{cardIcons}</CardActions>}
    </Card>
  );
};

export default Thumbnail;