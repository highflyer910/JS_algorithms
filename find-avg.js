function findAvg(arr){
	var avg;
	var sum = 0;
	
	arr.foreach(function(elem){
	   sum += elem;
	});
	avg = sum/arr.length;

	return avg;

}