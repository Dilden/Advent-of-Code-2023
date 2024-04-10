import { findAllSymbols, findAllNums, hasSymbolNearby } from './utils.js';

export const actions = {
	engine: async ({ request }) => {
		const data = await request.formData();

		const schema = data.get('schema');

		const symbols = findAllSymbols(schema);
		const nums = findAllNums(schema);

		console.log(symbols);
		console.log(nums);

		const sumsOfNums = nums
			.map((num) => {
				const digitIsNearSymbol = num.n.split('').map((digit, index) => {
					const newX = num.x + index;

					num.x = newX;
					return hasSymbolNearby(symbols, num);
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
