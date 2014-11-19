'use strict';

/**
 * Regular expression for matching Skype URLs
 *
 * @api public
 */

module.exports = function () {
	return /(?:^|\\s)(["\'])?(?:(?:callto|skype):)(?:[a-zA-Z][a-zA-Z0-9\.,\-_]{5,31})(?:\?(?:add|call|chat|sendfile|userinfo))?\1/ig;
};
