function findSmallestCommonElement(firstArray, secondArray) {
  const commonElements = firstArray.filter((value) =>
    secondArray.includes(value)
  );

  if (commonElements.length === 0) {
    return "No common elements";
  }

  return Math.min(...commonElements);
}

const firstArray = [1, 2, 3, 4, 5];
const secondArray = [3, 5, 7, 8];
console.log(findSmallestCommonElement(firstArray, secondArray)); // -> 3

function bubbleSort(array) {
  let n = array.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return array;
}

const unsortedArray = [5, 3, 8, 1, 2];
console.log("Unsorted array:", unsortedArray);
const sortedArray = bubbleSort([...unsortedArray]);
console.log("Sorted array:", sortedArray); // -> 1, 2, 3, 5, 8
