export const createNumbers = () => {
	return new Array(45).fill(1).map((value, index) => {
		return value + index;
	});
};

export const createRandomIndex = (max) => {
	return Math.floor(Math.random() * max);
};

export const shuffleNumbers = (numbers) => {
	let count = 0;
	const numbersSize = numbers.length;
	while (count++ < 100) {
		const [spliced] = numbers.splice(createRandomIndex(numbersSize), 1);
		numbers.splice(createRandomIndex(numbersSize), 0, spliced);
	}
	return numbers;
};

export const popNumber = (numbers) => numbers.pop();

export const createLine = () => {
	const numbers = createNumbers();
	const line = [];
	const lineLength = 7;
	let count = 0;

	while (count++ < lineLength) {
		line.push(popNumber(shuffleNumbers(numbers)));
	}

	if (lineLength === line.length)
		console.log(`7개의 번호로 하나의 라인을 생성했습니다.`);
	else throw new Error(']===라인 생성 에러===[');

	return line;
};

export const createSet = () => {
	const set = [];
	const setLength = 5;
	let count = 0;

	while (count++ < setLength) {
		set.push(createLine());
	}

	if (setLength === set.length)
		console.log(`5개의 라인으로 하나의 세트를 생성했습니다`);
	else throw new Error(']===세트 생성 에러===[');

	return set;
};

// export const createRandomNumber = () => {
// 	return Math.ceil(Math.random() * 45);
// };
//
// export const pushUniqueNumber = (numbers) => {
// 	let randomNumber = createRandomNumber();
// 	while (numbers.includes(randomNumber)) randomNumber = createRandomNumber();
// 	return numbers.push(randomNumber);
// };

// export const createLine = () => {
// 	const line = [];
// 	let lineLength = 7;
// 	while (0 < lineLength--) pushUniqueNumber(line);
// 	return line;
// };

// export const createSet = () => {
// 	const set = [];
// 	let setLength = 5;
// 	while (0 < setLength--) set.push(createLine());
// 	return set;
// };

export const createColorMap = (numbers) => ({
	[numbers[0]]: '#FAD089',
	[numbers[1]]: '#FF9C5B',
	[numbers[2]]: '#F5634A',
	[numbers[3]]: '#ED303C',
	[numbers[4]]: '#3B8183',
	[numbers[5]]: '#e3f79b',
});
