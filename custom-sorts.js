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
  return s.split("").sort().join("") === t.split("").sort().join("")
}

function reverseBaseSort(arr) {
  return arr.sort((a,b) => {
    if(a.toString().length !== b.toString().length) {
      return b.toString().length - a.toString().length
    } else {
      return a - b;
    }
  })
}

function frequencySort(arr) {
  let count = {}
  for (let el of arr) {
    if(!count[el]) count[el] = 0;
    count[el]++
  }
  return arr.sort((a,b) => {
    if(count[a] < count[b]) {
      return -1;
    } else if (count[a] > count[b]) {
      return 1
    } else {
      return b - a
    }
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
