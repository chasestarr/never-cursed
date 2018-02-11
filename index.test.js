const postcss = require('postcss');

const plugin = require('./');

function run(input, output, opts) {
  return postcss([plugin(opts)])
    .process(input, { from: undefined })
    .then(result => {
      expect(result.css).toEqual(output);
      expect(result.warnings().length).toBe(0);
    });
}

describe('css comparisons', () => {
  it('converts a whole value', () => {
    const input = ' .rule { font-size: 1rem&; }';
    const output = ' .rule { font-size: 0.625rem; }';
    return run(input, output);
  });

  it('converts a decimal value', () => {
    const input = ' .rule { font-size: 3.2rem&; }';
    const output = ' .rule { font-size: 2rem; }';
    return run(input, output);
  });

  it('converts value with multiple &rem instances', () => {
    const input = ' .rule { padding: 2rem& 3.2rem& 1.6rem&; }';
    const output = ' .rule { padding: 1.25rem 2rem 1rem; }';
    return run(input, output);
  });

  it('should not convert standard rem instances', () => {
    const input = ' .rule { padding: 2rem 3.2rem 1.6rem; }';
    const output = ' .rule { padding: 2rem 3.2rem 1.6rem; }';
    return run(input, output);
  });
});
