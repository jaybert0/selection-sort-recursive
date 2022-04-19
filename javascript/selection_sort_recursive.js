function selectionSortRecursive(arr) {
  // type your code here
  
  if (arr.length === 0) {
    return []
  }
  const min = Math.min(...arr);
  // console.log(min)
  let filter = arr.filter(val => val !== min);
  // console.log(filter)
  const results = selectionSortRecursive(filter)
  // console.log(results)
  results.unshift(min)
  return results
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file

// And a written explanation of your solution
