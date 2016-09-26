# skype-regex [![Build Status](https://travis-ci.org/kevva/skype-regex.svg?branch=master)](https://travis-ci.org/kevva/skype-regex)

> Regular expression for matching Skype URLs


## Install

```
$ npm install --save skype-regex
```


## Usage

```js
const skypeRegex = require('skype-regex');

skypeRegex().test('skype:foobar123?call foo bar');
//=> true

skypeRegex({exact: true}).test('skype:foobar123?call foo bar');
//=> false

skypeRegex({exact: true}).test('skype:foobar123?call');
//=> true

'foo skype:foobar123?chat bar callto:foobar123'.match(skypeRegex());
//=> ['skype:foobar123?chat', 'callto:foobar123']
```


## API

### skypeRegex(options)

Returns a regex for matching Skype URLs.

#### options

##### exact

Type: `Boolean`<br>
Default: `false` *(Matches any Skype URLs in a string)*

Only match an exact string.
Useful with `RegExp#test` to check if a string is a Skype URL.


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
