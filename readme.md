# skype-regex [![Build Status](http://img.shields.io/travis/kevva/skype-regex.svg?style=flat)](https://travis-ci.org/kevva/skype-regex)

> Regular expression for matching Skype URLs

## Install

```sh
$ npm install --save skype-regex
```

## Usage

```js
var skypeRegex = require('skype-regex');

skypeRegex().test('skype:foobar123?call foo bar');
//=> true

skypeRegex({ exact: true }).test('skype:foobar123?call foo bar');
//=> false

skypeRegex({ exact: true }).test('skype:foobar123?call');
//=> true

'foo skype:foobar123?chat bar callto:foobar123'.match(skypeRegex());
//=> ['skype:foobar123?chat', 'callto:foobar123']
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
