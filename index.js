// pulled most of the code from https://github.com/cuth/postcss-pxtorem

const postcss = require('postcss');
const remRegex = require('./rem-unit-regex');

function toFixed(number, precision) {
  const multiplier = Math.pow(10, precision + 1),
    wholeNumber = Math.floor(number * multiplier);
  return Math.round(wholeNumber / 10) * 10 / multiplier;
}

function remReplace(m, $1) {
  if (!$1) return m;
  const value = parseFloat($1);
  const fixedVal = toFixed(value / 1.6, 5);
  return fixedVal === 0 ? '0' : fixedVal + 'rem';
}

function plugin(root) {
  root.walkRules(rule => {
    rule.walkDecls(decl => {
      // This should be the fastest test and will remove most declarations
      if (decl.value.indexOf('rem&') === -1) return;

      decl.value = decl.value.replace(remRegex, remReplace);
    });
  });
}

module.exports = postcss.plugin('never-cursed', () => plugin);
