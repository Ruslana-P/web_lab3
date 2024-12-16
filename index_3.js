function makeArray(firstArray, secondArray, maxLength) {
  const combinedArray = [...firstArray, ...secondArray];

  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  }

  return combinedArray;
}

console.log(makeArray([1, 2, 3], [4, 5, 6], 7));
console.log(makeArray([1, 2, 3], [4, 5, 6, 7, 8], 7));
console.log(makeArray([1, 2], [], 3));
