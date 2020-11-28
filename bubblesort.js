// To sort an array of integers from lowest to highest value.
function bubbleSort(array) {
    for (var i = array.length; i > 0; i--) {
      // Notice that j < (length - i)
      for (var j = 0; j < i; j++) {
        // Notice that j < (length - i)
        if (array[j] > array[j + 1]) {
          // Swap the numbers
          var temp = array[j]; // Temporary variable to hold the current number
          array[j] = array[j + 1]; // Replace current number with adjacent number
          array[j + 1] = temp;
        }
      }
    }
    
    return array;
}