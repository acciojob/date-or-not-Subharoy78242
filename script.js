var isDate = function (input) {
  // Check if input is a Date object and if it's a valid date
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }

  // Check if input is a string and if it can be parsed into a valid date
  if (typeof input === 'string') {
    const parsedDate = new Date(input);
    if (!isNaN(parsedDate)) {
      return true;
    }
  }

  // Check if input is a number (timestamp) and if it can be parsed into a valid date
  if (typeof input === 'number') {
    const parsedDate = new Date(input);
    if (!isNaN(parsedDate)) {
      return true;
    }
  }

  // If none of the above conditions are met, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));