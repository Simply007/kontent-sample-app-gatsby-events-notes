import React from 'react';
import Thumbnail from './Thumbnail';

const Hint = ({ item }) => {
  return (
    <Thumbnail
      title={item.elements.title.value}
      summary={item.elements.info.resolvedData.html}
      actions={[
        {
          title: "More",
          url: item.elements.url.value,
        }
      ]} />
  );
};

export default Hint;