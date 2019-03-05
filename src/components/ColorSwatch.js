import React from 'react';

import './color-swatch.css';

export const ColorSwatch = ({ color, label }) => {
  return (
    <div className="color-swatch" style={{ background: color }}>
      {label}
    </div>
  );
};