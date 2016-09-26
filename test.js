import test from 'ava';
import m from './';

test('match skype URLs', t => {
	const fixtures = [
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

	for (const x of fixtures) {
		t.true(m({exact: true}).test(x));
	}
});

test('do not match skype URLs', t => {
	const fixtures = [
		'callto:',
		'callto:foo*bar',
		'callto:foo/bar',
		'skype:',
		'skype:foo*bar',
		'skype:foo/bar'
	];

	for (const x of fixtures) {
		t.false(m({exact: true}).test(x));
	}
});
