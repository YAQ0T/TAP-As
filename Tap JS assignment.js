// Q2: Javascript Question
// Write a JavaScript function that takes an array of numbers as a parameter and returns a number based on the following requirements.

// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

// Constraints:
// n === nums.length
// 0 <= nums[i] <= n
// All the numbers of nums are unique.

function findTheMissingNumber(n = []) {
  let nSize = n.length;
  if (nSize == 0) {
    return 0;
  }
  let res = 0;
  for (let i = 0; i < nSize; i++) {
    res += i - n[i];
  }
  res += nSize;
  return res;
}
console.log(findTheMissingNumber([3, 0, 1])); // Ans == 2
console.log(findTheMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Ans == 8
console.log(findTheMissingNumber([0, 1])); // Ans == 2
//Time Complexity = O(n)
//Space Complexity = O(1) ==> constant
