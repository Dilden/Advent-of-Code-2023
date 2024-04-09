import { describe, it, expect } from 'vitest';
import { createFormDataRequest } from 'src/factories/createFormDataRequest.js';
import { actions, findAllSymbols, findAllNums } from './+page.server.js';

describe('day 2', () => {
	it.skip('gets the schematic', async () => {
		const request = createFormDataRequest({
			schema: schematic
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans
		});
	});

	it('finds all symbols', () => {
		expect(findAllSymbols(schematic)).toEqual([
			{ x: 3, y: 1, l: 1 }, // count begins at 0 from top left corner
			{ x: 6, y: 3, l: 1 },
			{ x: 3, y: 4, l: 1 },
			{ x: 5, y: 5, l: 1 },
			{ x: 3, y: 8, l: 1 },
			{ x: 5, y: 8, l: 1 }
		]);
	});

	it('finds all numbers', () => {
		expect(findAllNums(schematic)).toEqual([
			{ x: 0, y: 0, l: 3 },
			{ x: 5, y: 0, l: 3 },
			{ x: 2, y: 2, l: 2 },
			{ x: 6, y: 2, l: 3 },
			{ x: 0, y: 4, l: 3 },
			{ x: 0, y: 0, l: 3 },
			{ x: 0, y: 0, l: 3 },
			{ x: 0, y: 0, l: 3 },
			{ x: 0, y: 0, l: 3 },
			{ x: 0, y: 0, l: 3 }
		]);
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
