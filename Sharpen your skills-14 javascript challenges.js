// 1. Sum Any Number of Numbers Introduction
function sumEveryThings(...args) {
  let sum = 0;
  args.forEach((arg) => {
    sum += arg;
  });
  return sum;
}

function sumEveryThings(...args) {
  let sum = args.reduce((acc, cur) => {
    return cur + acc;
  }, 0);
  return sum;
}

function sumEveryThings(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

// 2. Counting True in an Array
function countTheTrues(arr) {
  let trueNum = 0;
  arr.forEach((item) => {
    if (item === true) trueNum++;
  });
  return trueNum;
}
function countTheTrues(arr) {
  const trueItems = arr.filter((item) => item === true);
  return trueItems.length;
}

function countTheTrues(arr) {
  return arr.filter(Boolean).length;
}
function countTheTrues(arr) {
  return arr.reduce(
    (trueNums, curr) => (curr === true ? trueNums + 1 : trueNums),
    0
  );
}

// 3.creating specialized multiplier function

function createMultFunction(a) {
  return function (b) {
    return b * a;
  };
}
const createMultFunction = (a) => (b) => b * a;

// 4.shuffle and array function
function shuffleArray(arr) {
  let newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    let j = Math.floor(Math.random() * newArr.length);
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
// 5.Iterate over Properties of an Object
function isObj(val) {
  return typeof val === "object" && val !== null;
}
function objProps(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      objProps(obj[key]);
    } else {
      console.log(key, obj[key]);
    }
  }
}
function objProps(obj) {
  for (let [key, value] of Object.entries(obj)) {
    if (isObj(value)) {
      objProps(value);
    } else {
      console.log(key, value);
    }
  }
}
function objProps(obj) {
  Object.keys(obj).forEach((key) => {
    if (isObj(obj[key])) {
      objProps(obj[key]);
    } else {
      console.log(key, obj[key]);
    }
  });
}

// 7. Remove Falsey Values from an Array

function removeFalseys(arr) {
  let newArr = [];
  arr.forEach((i) => {
    i && newArr.push(i);
  });
  return newArr;
}

function removeFalseys(arr) {
  let newArr = [];
  for (let i of arr) {
    if (i) {
      newArr.push(i);
    }
  }
  return newArr;
}
function removeFalseys(arr) {
  return arr.filter(Boolean);
}
function removeFalseys(arr) {
  return arr.filter((val, index) => val);
}

// 8. Create Function to Determine a Person's Age
function determineAge(day, month, year) {
  const now = new Date();
  const birthDate = new Date(year, month - 1, day);

  let years = now.getFullYear() - birthDate.getFullYear();
  let months = now.getMonth() - birthDate.getMonth();
  let days = now.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const ageInSeconds = (now - birthDate) / 1000;
  const hours = Math.floor(ageInSeconds / (60 * 60));
  const minutes = Math.floor(ageInSeconds / 60);

  return `You are ${years} years, ${months} months, and ${days} days old, which is ${hours} hours, ${minutes} minutes, and ${ageInSeconds} seconds.`;
}

//9. Inserting a Value into an Array

function insertEveryN(arr, data, n) {
  let newArr = [...arr];
  let pos = 0;
  for (let i = 0; i < Math.floor(arr.length / n); i++) {
    pos += n;
    newArr.splice(pos + i, 0, data);
  }
  return newArr;
}

function insertEveryN(arr, data, n) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
    if ((i + 1) % n === 0) {
      result.push(data);
    }
  }
  return result;
}

function insertEveryN(arr, data, n) {
  return arr.flatMap((el, index) => ((index + 1) % n === 0 ? [el, data] : el));
}

//10. Insert Space into a String
function insertWhiteSpace(str) {
  let result = [];
  [...str].forEach((char) => {
    if (char === char.toUpperCase()) {
      result.push(" ");
    }
    result.push(char);
  });
  return result.join("");
}

function insertWhiteSpace(str) {
  const regEx = /[A-Z]/g;
  return [...str]
    .map((el, index) => (regEx.test(el) && index !== 0 ? " " + el : el))
    .join("");
}
function insertWhiteSpace(str) {
  return str.replace(/([A-Z])/g, " $1").trim();
}

//11. Determining the Total Length of an Array

function totalLength(arr) {
  let len = 0;
  arr.forEach((el) => {
    if (Array.isArray(el)) {
      len += totalLength(el);
    } else {
      len++;
    }
  });
  return len;
}
function totalLength(arr) {
  return arr.reduce(
    (acc, el) => acc + (Array.isArray(el) ? totalLength(el) : 1),
    0
  );
}

//12. Multiply One Number at a Time

function multiplying(num1) {
  return (num2) => {
    return (num3) => num1 * num2 * num3;
  };
}
const multiplying = (num1) => (num2) => (num3) => num1 * num2 * num3;

function multiplying(num1) {
  return function (num2) {
    return function (num3) {
      return num1 * num2 * num3;
    };
  };
}

//13. Convert Fahrenheit to Celsius and Celsius to Fahrenheit

function convertDegrees(str) {
  const degree = [...str].at(-1);
  const degreeNum = parseInt(str);
  if (degree === "F" || degree === "f") {
    let resultNum = ((degreeNum - 32) * 5) / 9;
    return resultNum + "C";
  } else if (degree === "C" || degree === "c") {
    let resultNum = (degreeNum * 9) / 5 + 32;
    return resultNum + "F";
  } else {
    return new Error("Error");
  }
}

function convertDegrees(str) {
  const match = str.match(/^(\d+(\.\d+)?)([CF])$/);
  if (!match) return new Error("Invalid input format.");

  const [, value, , unit] = match;
  const degreeNum = parseFloat(value);
  if (unit === "F") {
    return ((degreeNum - 32) * 5) / 9 + "C";
  } else if (unit === "C") {
    return (degreeNum * 9) / 5 + 32 + "F";
  }
}

function convertDegrees(str) {
  const degree = str.slice(-1).toUpperCase();
  const degreeNum = parseFloat(str);
  switch (degree) {
    case "F":
      return ((degreeNum - 32) * 5) / 9 + "C";
    case "C":
      return (degreeNum * 9) / 5 + 32 + "F";
    default:
      return new Error("Invalid unit. Use 'C' or 'F'.");
  }
}

//14. Create Frequency Object

function getFrequencyObj(arr) {
  let obj = {};
  for (let i of arr) {
    obj[i] = obj[i] ? obj[i] + 1 : 1;
  }
  return obj;
}

function getFrequencyObj(arr) {
  return arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, {});
}

function getFrequencyObj(arr) {
  let obj = {};
  arr.forEach((item) => {
    obj[item] = (obj[item] || 0) + 1;
  });
  return obj;
}
