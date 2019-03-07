import React from 'react';
import Measure from 'react-measure';
import { ColorSwatch } from '../color-swatch/ColorSwatch';

import { colorSwatchSize, listItemMargin } from '../../js-env-variables';

import './color-list.css';

const maxItemsPerLine = (lineWidth, itemSize) =>
  Math.floor(lineWidth / itemSize);

const isSwatchHidden = (listWidth, swatchIndex, swatchWidth) =>
  swatchIndex + 1 > maxItemsPerLine(listWidth, swatchWidth);

export const ColorList = ({ colorSwatches, handleClick }) => {
  const [listWidth, setListWidth] = React.useState(-1);
  return (
    <div className="color-list__container">
      <button className="color-list__controls">&lt;</button>
      <Measure
        bounds
        onResize={contentRect => setListWidth(contentRect.bounds.width)}
      >
        {({ measureRef }) => (
          <ul ref={measureRef} className="color-list">
            {colorSwatches.map((colorInfo, i) => {
              const hidden = isSwatchHidden(
                listWidth,
                i,
                colorSwatchSize + 2 * listItemMargin
              );
              return (
                <li key={i} className="color-list__item" hidden={hidden}>
                  <ColorSwatch
                    element="button"
                    {...colorInfo}
                    onClick={handleClick(colorInfo)}
                    disabled={hidden}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </Measure>
      <button className="color-list__controls">&gt;</button>
    </div>
  );
};
