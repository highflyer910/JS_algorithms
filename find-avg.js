function findAvg(arr) {
    var total = 0;
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
    }
    var avg = total / arr.length;
    return avg; 
}