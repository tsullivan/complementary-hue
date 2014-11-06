/*
 *
 * https://github.com/tsullivan/comph
 *
 * Copyright (c) 2014 Tim Sullivan
 * Licensed under the MIT license.
 */

'use strict';

var validator = require('validator');

/*
 * @param hue input hue val
 * @return complentary hue val
 */
exports.complementaryHue = function(hue) {

	// check for non-numeric
	if (typeof hue !== 'number') {
		hue = parseInt(hue);
	}

	// check for NaN and return
	if (validator.isInt(hue)) {
		return (hue < 180) ? hue + 180 : hue - 180;
	} else {
		return;
	}

};

/*
 * Original sample code from yeoman generator
 */
exports.awesome = function() {
	return 'awesome';
};
