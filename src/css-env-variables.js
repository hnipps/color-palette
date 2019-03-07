const {
  colorSwatchSize,
  rootFontSize,
  listItemMargin
} = require('./js-env-variables.js');
const { getPxToRem } = require('./utils/px-to-rem.js');

const pxToRem = getPxToRem(rootFontSize);

module.exports = {
  environmentVariables: {
    '--heading-1-font-size': '24px',
    '--root-font-size': `${rootFontSize}px`,
    '--color-swatch-size': pxToRem(colorSwatchSize),
    '--list-item-margin': pxToRem(listItemMargin)
  }
};
