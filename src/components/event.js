import React from "react";
import { Typography } from "@material-ui/core";


const Event = (props) => {
  console.log(props.items);
  const items = (props.items || []).map((eventItem, index) => {
    return (
      <Typography key={index} variant="subtitle1" component="h4" gutterBottom>
        {eventItem.elements.event_info__name.value}
      </Typography>
    );
  });


  return (
    <>
      <a href={props.url}>
        <Typography variant="h6" component="h3" gutterBottom>
          {props.name}
        </Typography>
      </a>
      {items}
    </>
  );
};

export default Event