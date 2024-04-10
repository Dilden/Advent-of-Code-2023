export const isAboveOrLeft = (symbolY, numberY) => {
	return symbolY === numberY || symbolY === numberY - 1;
};
export const isBelowOrRight = (symbolY, numberY) => {
	return symbolY === numberY || symbolY === numberY + 1;
};

export const hasSymbolNearby = (allSymbolCoords, numberCoord) => {
	const hasSymbol = allSymbolCoords.map((symbolCoord) => {
		if (
			(isAboveOrLeft(symbolCoord.y, numberCoord.y) ||
				isBelowOrRight(symbolCoord.y, numberCoord.y)) &&
			(isAboveOrLeft(symbolCoord.x, numberCoord.x) || isBelowOrRight(symbolCoord.x, numberCoord.x))
		) {
			return true;
		} else {
			return false;
		}
	}, []);
	return hasSymbol.includes(true);
};

export const findAllSymbols = (text) => {
	return findAllCoords(text, /[$&+,:;=?@#|'<>^*(/)%!-]/g);
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
				coords.push({ x: line.indexOf(special), y: y - 1, n: special });
			});
		}
	});

	return coords; // [{x: number, y: number, n: string}, ...]
};
