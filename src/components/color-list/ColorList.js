import React from 'react';
import Measure from 'react-measure';
import { ColorSwatch } from '../color-swatch/ColorSwatch';

import './color-list.css';

export const ColorList = ({ colorSwatches, handleClick }) => {
  const [listWidth, setListWidth] = React.useState(-1);
  return (
    <Measure
      bounds
      onResize={contentRect => setListWidth(contentRect.bounds.width)}
    >
      {({ measureRef }) => (
        <ul ref={measureRef} className="color-list">
          {colorSwatches.map((colorInfo, i) => (
            <li key={i} className="color-list__item">
              <ColorSwatch
                element="button"
                {...colorInfo}
                onClick={handleClick(colorInfo)}
              />
            </li>
          ))}
        </ul>
      )}
    </Measure>
  );
};
