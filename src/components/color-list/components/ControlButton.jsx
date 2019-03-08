import React from 'react';

import './control-button.css';

export const ControlButton = ({ disabled, onClick, variant }) => {
  return (
    <button className="control-button" disabled={disabled} onClick={onClick}>
      {variant === 'left' ? '<' : '>'}
    </button>
  );
};

{
  /* <button
    className="color-list__controls"
    disabled={currentPage <= 1}
    onClick={setPage(currentPage - 1)}
  >
    &lt;
  </button> */
}
