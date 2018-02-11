## never cursed [![NPM version](https://badge.fury.io/js/never-cursed.svg)](http://badge.fury.io/js/never-cursed)

[![never-cursed](/internals/img/tennis-scene.jpg)](https://www.youtube.com/watch?v=bT_XjcdgT6g)

### install

```sh
npm install --save --save-exact never-cursed
```

working with scaled rem (`font-size: 62.5%; /* 62.5% of 16px = 10px */`) is super dev friendly, but is isolated to a single css file, and isn't very _explicit_. this postcss plugin allows you to write scaled rem values without changing the html `font-size`.

```css
/* input */
h1 {
  padding: 2rem& 3.2rem& 1.6rem&;
  font-size: 2rem&;
}

/* output */
h1 {
  padding: 1.25rem 2rem 1rem;
  font-size: 1.25rem;
}
```

no configuration options at the moment. see [postcss](https://github.com/postcss/postcss) docs for installation instructions.
