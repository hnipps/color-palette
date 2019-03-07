import React from 'react';
import Measure from 'react-measure';
import { ColorSwatch } from '../color-swatch/ColorSwatch';

import { colorSwatchSize, listItemMargin } from '../../js-env-variables';

import './color-list.css';

const isSwatchHidden = (listWidth, swatchIndex, swatchWidth) =>
  swatchIndex + 1 > Math.floor(listWidth / (swatchWidth + 2 * listItemMargin));

export const ColorList = ({ colorSwatches, handleClick }) => {
  const [listWidth, setListWidth] = React.useState(-1);
  console.log(isSwatchHidden(100, 9, 10));

  return (
    <div className="color-list__container">
      <button className="color-list__controls">&lt;</button>
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
                  disabled={isSwatchHidden(listWidth, i, colorSwatchSize)}
                />
              </li>
            ))}
          </ul>
        )}
      </Measure>
      <button className="color-list__controls">&gt;</button>
    </div>
  );
};
