'use strict';

var comph = require('../lib/comph.js');

var input = 30,
	result = comph.complementaryHue(input);

console.log('Given an input hue of %d, the complementary hue is %d', input, result);
