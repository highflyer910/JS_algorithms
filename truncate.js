function truncateString(str, num) {
 
  var trunc = '';
    if (str.length > num) {
        trunc = str.slice(0,num) + '...';
        return trunc;
    }
    return str;
}
