/* Проверяем парные скобки [], {}, () */

const bracketChecker = (sequence: string): boolean => {
	const openingBrackets: string[] = ['(', '[', '{'];
	
	const mapping: any = {
		')': '(',
		']': '[',
		'}': '{',
	};

	const stack: string[] = [];

	for (let i = 0; i < sequence.length; i += 1) {
		const currentChar = sequence[i];

		if (openingBrackets.includes(currentChar)) {
			stack.push(currentChar);
		}

		if (mapping.hasOwnProperty(currentChar)) {
			if (stack.length > 0) {
				const currentBrackets = stack.pop();

				if (mapping[currentChar] !== currentBrackets) {
					return false;
				}
			}
		}
	}

	return stack.length > 0 ? false : true;
};

export default bracketChecker;