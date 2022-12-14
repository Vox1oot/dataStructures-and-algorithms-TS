import bracketChecker from '../src/stack/bracketChecker.ts';

test('bracketChecker', () => {
	expect(bracketChecker('c[d]')).toBeTruthy();
	expect(bracketChecker('a{b[c]d}e')).toBeTruthy();
	expect(bracketChecker('()')).toBeTruthy();
	expect(bracketChecker('(([{}]))')).toBeTruthy();
	expect(bracketChecker('a{b[cd}e')).toBeFalsy();
	expect(bracketChecker('a{))')).toBeFalsy();
	expect(bracketChecker('{')).toBeFalsy();
  });
  