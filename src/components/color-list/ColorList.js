import React from 'react';
import { ColorSwatch } from '../color-swatch/ColorSwatch';

import './color-list.css';

export const ColorList = ({ colorSwatches, handleClick }) => {
  return (
    <ul className="color-list">
      {colorSwatches.map(colorInfo => (
        <li className="color-list__item">
          <ColorSwatch
            element="button"
            {...colorInfo}
            onClick={handleClick(colorInfo)}
          />
        </li>
      ))}
    </ul>
  );
};
