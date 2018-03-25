function mutation(arr){
  var str = arr[0].toLowerCase();
  var strChecker = arr[1].toLowerCase();
  for (var i = 0; i < strChecker.length; i++){
    if(str.indexOf(strChecker[i]) < 0) {
      return false;
    }
  }
  return true;
}