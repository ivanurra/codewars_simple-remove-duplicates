function solve(arr){
    // I create a new empty array
    let newArray = []
    while (arr.length > 0) {
      // Pop method removes the last element from an array and returns its value to the method that called it.
      const removeElem = arr.pop()
      // If the new array (newArray) doesnt include the deleted element (removeElem, insert it into the new array.
      if (!newArray.includes(removeElem)){
        newArray.push(removeElem)
      }
    }
    return newArray.reverse()
}