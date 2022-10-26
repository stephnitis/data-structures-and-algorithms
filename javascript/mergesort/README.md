# mergesort

## branch: mergesort

1. Divide the array into halves, until the array can no longer be divided
2. Once elements are in smallest units, compare based on values
3. Sort the elements based on values
4. Merge elements of array into new list

[merge sort](./mergesort.png)

*Think of it as a recursive algorithm continuously splits the array in half until it cannot be further divided. This means that if the array becomes empty or has only one element left, the dividing will stop, i.e. it is the base case to stop the recursion. If the array has multiple elements, split the array into halves and recursively invoke the merge sort on each of the halves. Finally, when both halves are sorted, the merge operation is applied. Merge operation is the process of taking two smaller sorted arrays and combining them to eventually make a larger one.*

References:

- [geeksforgeeks](https://www.geeksforgeeks.org/merge-sort/?ref=lbp)
- [tutorialspoint](https://www.tutorialspoint.com/how-to-implement-merge-sort-in-javascript)
- [w3resource](https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-2.php)
