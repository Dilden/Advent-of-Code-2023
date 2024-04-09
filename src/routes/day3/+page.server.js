export const actions = {
	engine: async ({ request }) => {
		const data = await request.formData();

		const schema = data.get('schema');

		const symbols = findAllSymbols(schema);
		const nums = findAllNums(schema);

		console.log(nums);
		return {
			sum: 0,
			...symbols,
			...nums
		};
	}
};

export const findAllSymbols = (text) => {
	return findAllCoords(text, /[$&+,:;=?@#|'<>^*()%!-]/g);
};

export const findAllNums = (text) => {
	return findAllCoords(text, /(\d+)/g);
};

const findAllCoords = (text, regex) => {
	const map = text.split(`\n`);
	const coords = [];

	map.map((line, y) => {
		const found = line.match(regex);
		if (found) {
			found.map((special) => {
				coords.push({ x: line.indexOf(special), y: y - 1, l: special.length });
			});
		}
	});

	return coords;
};
