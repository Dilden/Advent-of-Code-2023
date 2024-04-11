import { describe, it, expect } from 'vitest';
import { createFormDataRequest } from 'src/factories/createFormDataRequest.js';
import { actions } from './+page.server.js';

describe('day 3', () => {
	it('returns correct answer from schematic6', async () => {
		const request = createFormDataRequest({
			schema: schematic6
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans6
		});
	});
	it('returns correct answer from schematic5', async () => {
		const request = createFormDataRequest({
			schema: schematic5
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans5
		});
	});
	it('returns a 4 from schematic3', async () => {
		const request = createFormDataRequest({
			schema: schematic3
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans3
		});
	});

	it('returns a 2 from schematic4', async () => {
		const request = createFormDataRequest({
			schema: schematic4
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans4
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
	it('gets the sum of all parts in the second schematic', async () => {
		const request = createFormDataRequest({
			schema: schematic2
		});

		const res = await actions.engine({ request });
		expect(res).toEqual({
			sum: ans2
		});
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

const ans4 = 2;
const schematic4 = `
........
.1.1.1.1
......*.
`;

const ans5 = 925;
const schematic5 = `
12.......*..
+.........34
.......-12..
..78........
..*....60...
78.........9
.5.....23..$
8...90*12...
............
2.2......12.
.*.........*
1.1..503+.56
`;

const ans6 = 62;
const schematic6 = `
.......5......
..7*..*.....4*
...*13*......9
.......15.....
..............
..............
..............
..............
..............
..............
21............
...*9.........
`;
