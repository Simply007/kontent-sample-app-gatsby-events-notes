import React from 'react';

import Hint from 'components/Hint';

const resolveContentItem = (linkedItem) => {
  switch (linkedItem.system.type) {
    case 'hint': {
      return <Hint item={linkedItem} />;
    }
    default: {
      return null;
    }
  }
};

export {
  resolveContentItem
};