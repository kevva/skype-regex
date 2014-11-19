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

skypeRegex().exec('Call to foobar skype:foobar123?call')[0].trim();
//=> skype:foobar123?call

'Multiple callto:foobar123 skype:foobar123?chat Skype URLs'.match(skypeRegex());
//=> ['callto:foobar123', 'skype:foobar123?chat']
```

## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
