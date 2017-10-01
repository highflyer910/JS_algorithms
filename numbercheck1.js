function telephoneCheck(str){
	return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(str); 
}	