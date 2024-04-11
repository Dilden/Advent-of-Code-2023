import { findAllSymbols, findAllNums, hasSymbolNearby } from './utils.js';

export const actions = {
	engine: async ({ request }) => {
		const data = await request.formData();

		const schema = data.get('schema');

		const symbols = findAllSymbols(schema);
		const nums = findAllNums(schema);

		const sumsOfNums = nums
			.map((num) => {
				// need to check each digit of a number
				// hasSymbolNearby requires an entire number object though
				//  ex. { x: 1, y: 2, l: '345'}
				const numberStringArray = num.n.split('');

				const allNumberObjs = numberStringArray.map((digit, index) => {
					return { x: num.x + index, y: num.y, l: digit };
				});

				const digitIsNearSymbol = allNumberObjs.map((numberObj) => {
					return hasSymbolNearby(symbols, numberObj);
				});

				if (digitIsNearSymbol.includes(true)) {
					return Number(num.n);
				}
			})
			.filter((x) => {
				if (x) {
					return x;
				}
			})
			.reduce((a, b) => a + b, 0);

		return {
			sum: sumsOfNums
		};
	}
};
