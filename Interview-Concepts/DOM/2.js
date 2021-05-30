//Question: How could I verify whether one element is child of another?

function isDescendant(parent, child) {
    while (child.parentNode) {
        if (child.parentNode == parent) 
            return true;

        child = child.parentNode;
    }

    return false;
}