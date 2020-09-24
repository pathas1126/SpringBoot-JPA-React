export const createRandomNumber = () => {
	return Math.ceil(Math.random() * 45);
};

export const pushUniqueNumber = (numbers) => {
	let randomNumber = createRandomNumber();
	while (numbers.includes(randomNumber)) randomNumber = createRandomNumber();
	return numbers.push(randomNumber);
};

export const createLine = () => {
	const line = [];
	let lineLength = 7;
	while (0 < lineLength--) pushUniqueNumber(line);
	return line;
};

export const createSet = () => {
	const set = [];
	let setLength = 5;
	while (0 < setLength--) set.push(createLine());
	return set;
};

export const createColorMap = (numbers) => ({
	[numbers[0]]: '#FAD089',
	[numbers[1]]: '#FF9C5B',
	[numbers[2]]: '#F5634A',
	[numbers[3]]: '#ED303C',
	[numbers[4]]: '#3B8183',
	[numbers[5]]: '#e3f79b',
});
