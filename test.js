'use strict';
var test = require('ava');
var skypeRegex = require('./');

test('match skype URLs', function (t) {
	var fixtures = [
		'callto:foobar123',
		'callto:foo.bar123',
		'callto:foo,bar123',
		'callto:foo_bar123',
		'skype:foobar123',
		'skype:foo.bar123',
		'skype:foo,bar123',
		'skype:foo_bar123',
		'skype:foobar123?add',
		'skype:foobar123?call',
		'skype:foobar123?chat',
		'skype:foobar123?sendfile',
		'skype:foobar123?userinfo'
	];

	fixtures.forEach(function (el) {
		t.assert(skypeRegex({exact: true}).test(el), el);
	});

	t.end();
});

test('do not match skype URLs', function (t) {
	var fixtures = [
		'callto:',
		'callto:foo*bar',
		'callto:foo/bar',
		'skype:',
		'skype:foo*bar',
		'skype:foo/bar'
	];

	fixtures.forEach(function (el) {
		t.assert(!skypeRegex({exact: true}).test(el), el);
	});

	t.end();
});
