import isTimeSignature from '../../../../src/parser/matchers/isTimeSignature';

describe('isTimeSignatureS', () => {
	test('Module', () => {
		expect(isTimeSignature).toBeInstanceOf(Function);
	});
});

describe.each([
	['1/2', true],
	['2/2', true],
	['3/2', true],
	['4/2', true],

	['1/4', true],
	['2/4', true],
	['3/4', true],
	['4/4', true],
	['5/4', true],
	['6/4', true],
	['7/4', true],
	['9/4', true],
	['10/4', true],

	['3/8', true],
	['5/8', true],
	['6/8', true],
	['7/8', true],
	['9/8', true],
	['12/8', true],

	[' 4/4', false],
	['4/4 ', false],
	[' 4/4 ', false],

	['3/3', false],
	['13/8', false],
])('Time signature string %s', (tsString, result) => {
	test('Correctly detect time signature', () => {
		expect(isTimeSignature(tsString)).toEqual(result);
	});
});
