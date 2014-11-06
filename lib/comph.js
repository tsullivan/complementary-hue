/*
 *
 * https://github.com/tsullivan/comph
 *
 * Copyright (c) 2014 Tim Sullivan
 * Licensed under the MIT license.
 */

'use strict';

/*
 * @param hue input hue val
 * @return complentary hue val
 */
exports.complementaryHue = function(hue) {
	return (hue < 180) ? hue + 180 : hue - 180;
};

/*
 * Original sample code from yeoman generator
 */
exports.awesome = function() {
	return 'awesome';
};
