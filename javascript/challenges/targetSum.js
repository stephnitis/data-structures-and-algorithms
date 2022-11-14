// Given a sorted array of unique integers and a target integer, return true if there exists a pair of numbers that sum to target, false otherwise.

// The brute force solution would be to iterate over all pairs of integers. This would result in a time complexity of O(n^2)O(n2), where nn is the length of the array. Because the array is sorted, we can use two pointers to improve to an O(n)O(n) time complexity.

const targetSum = (sortedArray, target) => {
  let left = 0;
  let right = sortedArray.length - 1;

  while(left < right){
    let current = sortedArray[left] + sortedArray[right];
    if(current === target){
      return true;
    }

    if(current > target){
      right--;
    } else {
      left++;
    }
  }
  return false;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('target sum 100 ----->', targetSum(array, 100));
console.log('target sum 15 ----->', targetSum(array, 15));
