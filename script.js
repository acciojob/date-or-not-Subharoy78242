var isDate = function (input) {
	return !isNaN(Date.parse(input));
};

// Do not change the code below.
const input = promp("Enter Date.");
aler(isDate(input));