function flatten(arr){
    arr.reduce((acc, item) => {
        if (Array.isArray(item)){
            acc = acc.concat(flatten(item));
        } else {
            acc.puch(item);
        }
        return acc;
    }, []);

    return someNewArray;
}