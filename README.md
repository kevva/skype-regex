# skype-regex [![Build Status](https://travis-ci.org/kevva/skype-regex.svg?branch=master)](https://travis-ci.org/kevva/skype-regex)

> Regular expression for matching Skype URLs

## Install

```sh
$ npm install --save skype-regex
```

## Usage

```js
var skypeRegex = require('skype-regex');

skypeRegex().test('skype:foobar123?call');
//=> true

'foo skype:foobar123?chat bar callto:foobar123'.match(skypeRegex());
//=> ['skype:foobar123?chat', 'callto:foobar123']
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
