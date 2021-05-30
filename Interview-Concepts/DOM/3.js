//Question: What is the best way to create a DOM element? Set innherHTML or use createElement?

/*
 When you set innerHTML property, browser removes all the current children of the elements. Parse the string and assign the parsed string to the element as children.
For example, if you want to add a list item to an unorderedList. You can get the element and set the innerHTML of the element like
*/

//Extra Credit: innerHTML could be slow while parsing a string. Browser has to deal with the string and if you have invalid html (invalid html).

var ul = document.getElementById('myList');
el.innerHTML = '<li>Only one item</li>';   


/*
appendChild
On the other hand, while using appendChild, you create a new Element. Since you are creating it, 
browser doesnt have to parse string and there is no invalid html. 
And you can pass the child to the parent and child will be appended to the parent.
*/