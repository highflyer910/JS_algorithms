//Using endsWith() method

function confirmEnding(str, target) {
  
  return str.endsWith(target);
}

// with substr() method

function confirmEnding(string, target) {
  if (string.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
