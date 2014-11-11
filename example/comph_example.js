/*
 * Run this with `node example/comph_example.js`
 * or mocha --grep='example code'
 */

'use strict';

var comph = require('../lib/comph.js'),
	util = require('util'),
	runningAsScript = require.main === module;

function runExample (input) {
	var result = comph.complementaryHue(input);

	return util.format('Given an input hue of %d, the complementary hue is %d', input, result);
};

if (runningAsScript) {
	console.log(runExample(30));
}

module.exports = runExample;
