function mergeArrays(left, right) {
  let newArray = [];
  while(left.length && right.length){
    if(left[0] < right[0]){
      newArray.push(left.shift());
    } else {
      newArray.push(right.shift());
    }
  }
  return [...newArray, ...left, ...right];
}

function mergeSort(unsortedArray) {
  let middleIndex = unsortedArray.length / 2;
  if(unsortedArray.length < 2){
    return unsortedArray;
  }
  let left = unsortedArray.splice(0, middleIndex);
  return mergeArrays(mergeSort(left), mergeSort(unsortedArray));
}

let unsortedArray = [8,4,23,42,16,15];

console.log('unsorted array ---->',mergeSort(unsortedArray));

let reverseSorted = [20,18,12,8,5,-2];

console.log('Reverse-sorted ---->', mergeSort(reverseSorted));

let fewUniques = [5,12,7,5,5,7];

console.log('Few uniques ---->', mergeSort(fewUniques));

let nearlySorted = [2,3,5,7,13,11];

console.log('Nearly-sorted ---->', mergeSort(nearlySorted ));
