// Given two sorted integer arrays, return an array that combines both of them and is also sorted.

// The trivial approach would be to first combine both input arrays and then perform a sort. If we have n = arr1.length + arr2.length, then this gives a time complexity of O(n \cdot \log{}n)O(n⋅logn). This would be a good approach if the input arrays were not sorted, but because they are sorted, we can use the two-pointers technique to improve to O(n)O(n).

// We can build the answer array ans one element at a time. Start two pointers at the first index of each array, and compare their elements. At each iteration, we have 2 values. Whichever value is lower needs to come first in the answer, so add it to the answer and move the respective pointer.

const combine = (arrayOne, arrayTwo) => {
  let result = [];
  let i = 0;
  let j = 0;

  while( i < arrayOne.length && j < arrayTwo.length){
    if(arrayOne[i] < arrayTwo[j]){
      result.push(arrayOne[i]);
      i++;
    } else {
      result.push(arrayTwo[j]);
      j++;
    }
  }

  while (i < arrayOne.length){
    result.push(arrayOne[i]);
    i++;
  }

  while( j < arrayTwo.length){
    result.push(arrayTwo[j]);
    j++;
  }

  return result;

};

let arrayOne = [1, 3, 15, 27];
let arrayTwo = [2, 4, 6, 30];

console.log(combine(arrayOne, arrayTwo));
