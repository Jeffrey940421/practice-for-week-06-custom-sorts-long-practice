function ageSort(users) {
  return users.sort((a, b) => a.age - b.age)
}

function oddEvenSort(arr) {
  return arr.sort((a, b) => {
    if (a % 2 !== 0 && b % 2 === 0) {
      return -1;
    } else if (a % 2 === 0 && b % 2 !== 0) {
      return 1;
    } else {
      return a - b;
    }
  })
}

/*
compareFn(a, b) return value	sort order
                  > 0	        sort a after b, e.g. [b, a]
                  < 0	        sort a before b, e.g. [a, b]
                === 0	        keep original order of a and b
*/

function validAnagrams(s, t) {
  // Your code here
}

function reverseBaseSort(arr) {
  // Your code here
}

function frequencySort(arr) {
  // Your code here
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
