function customFlatten(array, depth = 1) {
    if (depth < 1) {
      return array.slice();
    }
  
    return array.reduce((acc, item) => {
      if (Array.isArray(item)) {
        acc.push(...customFlatten(item, depth - 1));
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  }

  function customFlatten2(array, depth = 1) {
    let newArray = [];
    array.forEach((arr) => {
      if (Array.isArray(arr) && depth > 0) {
        newArray.push(...customFlatten2(arr, depth - 1));
      } else {
        newArray.push(arr);
      }
    });
    return newArray;
  }
  
  // Example usage
  const nestedArray = [1, [2, [3, [4, 5]]], 6];
  const flattenedArray = customFlatten(nestedArray, 2);
  const flattenedArray2 = customFlatten2(nestedArray, 2);
  
  
  console.log(flattenedArray); // Output: [1, 2, 3, [4, 5], 6]
  console.log(flattenedArray2); // Output: [1, 2, 3, [4, 5], 6]