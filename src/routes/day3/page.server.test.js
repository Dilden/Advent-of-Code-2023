import { describe, it, expect } from 'vitest';
import { createFormDataRequest } from 'src/factories/createFormDataRequest.js';
import { actions } from './+page.server.js';
import {
	findAllSymbols,
	findAllNums,
	hasSymbolNearby,
	isAboveOrLeft,
	isBelowOrRight
} from './utils.js';

describe('day 3', () => {
	it('returns a 4 from schematic3', async () => {
		const request = createFormDataRequest({
			schema: schematic3
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans3
		});
	});
	it('gets the sum of all parts in the first schematic', async () => {
		const request = createFormDataRequest({
			schema: schematic
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans
		});
	});
	it.skip('gets the sum of all parts in the second schematic', async () => {
		const request = createFormDataRequest({
			schema: schematic2
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans2
		});
	});

	it.skip('finds all symbols', () => {
		expect(findAllSymbols(schematic)).toEqual([
			{ x: 3, y: 1, n: '*' }, // count begins at 0 from top left corner
			{ x: 6, y: 3, n: '#' },
			{ x: 3, y: 4, n: '*' },
			{ x: 5, y: 5, n: '+' },
			{ x: 3, y: 8, n: '$' },
			{ x: 5, y: 8, n: '*' }
		]);
	});

	it('finds all numbers', () => {
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

	it.skip('checks nearby symbols', () => {
		const symbolCoords = findAllSymbols(schematic);
		expect(hasSymbolNearby(symbolCoords, { x: 2, y: 0, n: '7' })).toEqual(true);
		expect(hasSymbolNearby(symbolCoords, { x: 5, y: 0, n: '1' })).toEqual(false);
		expect(hasSymbolNearby(symbolCoords, { x: 7, y: 5, n: '5' })).toEqual(false);
		expect(hasSymbolNearby(symbolCoords, { x: 6, y: 2, n: '6' })).toEqual(true);
	});
});

const ans = 4361;
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

const ans2 = 413;
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

const ans3 = 4;
const schematic3 = `
........
.24..4..
......*.
`;
