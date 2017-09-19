function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0], arr[1]);
  return (max - min + 1) * (min + max) / 2;
}