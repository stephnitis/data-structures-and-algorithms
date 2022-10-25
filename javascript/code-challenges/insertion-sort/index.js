const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j+1] = temp;
  }
  return nums;
};


let array = [8,4,23,42,16,15];

console.log('array one ----> ', insertionSort(array));

let reverseSorted = [20,18,12,8,5,-2];

console.log('Reverse Sorted ----> ', insertionSort(reverseSorted));

let fewUniques = [5,12,7,5,5,7];

console.log('Few Uniques ----> ', insertionSort(fewUniques));

let nearlySorted = [2,3,5,7,13,11];

console.log(' Nearly Sorted----> ', insertionSort(nearlySorted));
