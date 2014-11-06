#! /usr/bin/env node

'use strict';

(function () {
	var comph = require('./lib/comph');

	var userArgs = process.argv;
	var inputHue = userArgs[2],
		resultHue;

	if (userArgs.indexOf('-h') !== -1 || userArgs.indexOf('--help') !== -1 || inputHue === undefined) {
		console.log('Usage: comph <input hue: 0-359>');
		return;
	}

	if (userArgs.indexOf('-v') !== -1 || userArgs.indexOf('--version') !== -1) {
		console.log(require('./package').version);
		return;
	}

	resultHue = comph.complementaryHue(inputHue);
	console.log('Given an input hue of %d, the complementary hue is %d', inputHue, resultHue);
}());
