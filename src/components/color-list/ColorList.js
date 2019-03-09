import React from 'react';
import Measure from 'react-measure';
import { ColorSwatch } from '../color-swatch/ColorSwatch';

import { colorSwatchSize, listItemMargin } from '../../js-env-variables';

import './color-list.css';
import { ControlButton } from './components/ControlButton';

const getMaxItemsPerLine = (lineWidth, itemSize) =>
  Math.floor(lineWidth / itemSize);

const isItemHidden = (page, itemsPerPage, itemIndex) => {
  const [firstItemIndex, lastItemIndex] = [
    (page - 1) * itemsPerPage,
    itemsPerPage * page - 1
  ];

  return !(itemIndex >= firstItemIndex && itemIndex <= lastItemIndex);
};

export const ColorList = ({ colorSwatches, handleClick }) => {
  const [listWidth, setListWidth] = React.useState(-1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const colorSwatchTotalWidth = colorSwatchSize + 2 * listItemMargin;
  const changePage = increment => _ => setCurrentPage(currentPage + increment);
  const maxItemsPerLine = getMaxItemsPerLine(listWidth, colorSwatchTotalWidth);
  const lastPage = colorSwatches.length / maxItemsPerLine;
  return (
    <div className="color-list__container">
      <ControlButton
        variant="left"
        disabled={currentPage <= 1}
        onClick={changePage(-1)}
      />
      <Measure
        bounds
        onResize={contentRect => setListWidth(contentRect.bounds.width)}
      >
        {({ measureRef }) => (
          <ul ref={measureRef} className="color-list">
            {colorSwatches.map((colorInfo, i) => {
              const hidden = isItemHidden(currentPage, maxItemsPerLine, i);
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
      <ControlButton
        variant="right"
        disabled={currentPage >= lastPage}
        onClick={changePage(1)}
      />
    </div>
  );
};
