import { describe, it, expect } from 'vitest';
import {
	findAllSymbols,
	findAllNums,
	hasSymbolNearby,
	isAboveOrLeft,
	isBelowOrRight
} from './utils.js';

describe('create new map', () => {
	it('finds all symbols', () => {
		expect(findAllSymbols(schematic)).toEqual([
			{ x: 3, y: 1, n: '*' }, // count begins at 0 from top left corner
			{ x: 6, y: 3, n: '#' },
			{ x: 3, y: 4, n: '*' },
			{ x: 5, y: 5, n: '+' },
			{ x: 3, y: 8, n: '$' },
			{ x: 5, y: 8, n: '*' }
		]);
	});

	it('finds all numbers in example schematic', () => {
		expect(findAllNums(schematic)).toEqual([
			{ x: 0, y: 0, n: '467' },
			{ x: 5, y: 0, n: '114' },
			{ x: 2, y: 2, n: '35' },
			{ x: 6, y: 2, n: '633' },
			{ x: 0, y: 4, n: '617' },
			{ x: 7, y: 5, n: '58' },
			{ x: 2, y: 6, n: '592' },
			{ x: 6, y: 7, n: '755' },
			{ x: 1, y: 9, n: '664' },
			{ x: 5, y: 9, n: '598' }
		]);
	});

	it('finds all numbers in schematic with 4 1s', () => {
		expect(findAllNums(schematic4)).toEqual([
			{ x: 1, y: 1, n: '1' },
			{ x: 3, y: 1, n: '1' },
			{ x: 5, y: 1, n: '1' },
			{ x: 7, y: 1, n: '1' }
		]);
	});
});

describe('positioning', () => {
	it('checks isAboveOrLeft', () => {
		expect(isAboveOrLeft(0, 2)).toBe(false);
		expect(isAboveOrLeft(1, 2)).toBe(true);
		expect(isAboveOrLeft(2, 2)).toBe(true);
		expect(isAboveOrLeft(3, 2)).toBe(false);
	});
	it('checks isBelowOrRight', () => {
		expect(isBelowOrRight(0, 2)).toBe(false);
		expect(isBelowOrRight(1, 2)).toBe(false);
		expect(isBelowOrRight(2, 2)).toBe(true);
		expect(isBelowOrRight(3, 2)).toBe(true);
		expect(isBelowOrRight(4, 2)).toBe(false);
	});

	it('checks nearby symbols', () => {
		const symbolCoords = findAllSymbols(schematic);
		expect(hasSymbolNearby(symbolCoords, { x: 2, y: 0, n: '7' })).toEqual(true);
		expect(hasSymbolNearby(symbolCoords, { x: 5, y: 0, n: '1' })).toEqual(false);
		expect(hasSymbolNearby(symbolCoords, { x: 7, y: 5, n: '5' })).toEqual(false);
		expect(hasSymbolNearby(symbolCoords, { x: 6, y: 2, n: '6' })).toEqual(true);
	});
});

const schematic = `
467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..
`;

const schematic2 = `
12.......*..
+.........34
.......-12..
..78........
..*....60...
78..........
.......23...
....90*12...
............
2.2......12.
.*.........*
1.1.......56
`;

const schematic3 = `
........
.24..4..
......*.
`;

const schematic4 = `
........
.1.1.1.1
......*.
`;
