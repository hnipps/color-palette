import React from 'react';

import './color-swatch.css';

export const ColorSwatch = ({ color, label, element: Element, variant, ...props }) => {
  return (
    <Element
      className={['color-swatch', variant && `color-swatch--${variant}`]
        .join(' ')
        .trim()}
      style={{ background: color }}
      {...props}
    >
      <label className="color-swatch__label">{label}</label>
    </Element>
  );
};
