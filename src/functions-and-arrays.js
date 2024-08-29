// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
  if (typeof num1 && typeof num2 === "number") {
    if (num1 > num2) return num1;
    if (num1 < num2) return num2;
    if (num1 === num2) return num1;
  } else {
    console.log("Please enter the number");
  }
}

// Iteration 2 | Find the Longest Word
const words = [
  "mystery",
  "brother",
  "aviator",
  "crocodile",
  "pearl",
  "orchard",
  "crackpot",
];
console.log(typeof words);
function findLongestWord(words) {
  let res = "";
  if (words.length !== 0) {
    words.forEach((word) => {
      if (typeof word === "string") {
        res.length < word.length ? (res = word) : res;
      } else {
        console.log("The element is not a string.");
      }
    });
  } else {
    return null;
  }
  return res;
}

// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  const sum = numbers.reduce((prev, current) => prev + current, 0);
  return sum;
}

// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arr) {
  let averageNumbers;
  if(arr.length !== 0) {
    let sum = arr.reduce((prev, current) => prev + current, 0);
    return averageSum = sum / arr.length
  } else {
    return 0
  }
}

// Iteration 5 | Find Elements
const words2 = [
  "machine",
  "subset",
  "trouble",
  "starting",
  "matter",
  "eating",
  "truth",
  "disobedience",
];

function doesWordExist(arr,word) {
  let searchedWord = arr.includes(word)
  if(arr.length !== 0) {
    return searchedWord
  } else {
    return null
  }
}