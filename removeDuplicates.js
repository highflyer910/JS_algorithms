function removeDuplicates(str){
    const arr = str.split(" ");

    const set = new Set(arr);
    const newString = [...set].join(" ");

    return newString;
}