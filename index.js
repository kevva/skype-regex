'use strict';

module.exports = function (opts) {
	opts = opts || {};
	var regex = '(?:(?:callto|skype):)(?:[a-zA-Z][a-zA-Z0-9\\.,\\-_]{5,31})(?:\\?(?:add|call|chat|sendfile|userinfo))?';

	return opts.exact ? new RegExp('(?:^' + regex + '$)', 'i') :
						new RegExp('(?:^|\\s)?(["\'])?' + regex + '\\1', 'ig');
};
