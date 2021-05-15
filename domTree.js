// We have two identical DOM trees, A and B. From DOM tree A We have
// the location of the element.Create a function to find the same element in tree B. 


function reversePath(element, root){
    const path = [];
    let pointer = element;

    while(pointer.parent){
        const index = pointer.parent.children.indexof(pointer);
        path.push(index);

        pointer = pointer.parent;
    }

    pointer = root;

    while(path.length){
        pointer = children[path.pop()];

    }

}