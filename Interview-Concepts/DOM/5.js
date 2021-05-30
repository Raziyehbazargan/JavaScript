//Question: What is reflow? What causes reflow? How could you reduce reflow?

/*
reflow: When you change size or position of an element in the page, all the elements after it has to change their position 
according to the changes you made. For example, if you change height on an element, all the elements under it has to move 
down in the page to accomodate a change in height. 
Hence, flow of the elements in the page is changed and this is called reflow.
Why reflow is bad: Reflows could be very expensive and it might have a performance hit specially in the smaller devices 
like phone. As it might causes changes in the portion (or whole) layout of the page.
*/

/*
Reasons to reflow: The following cases causes reflow

change layout (geometry of the page)
resize the window
change height/width of any element
changing font
change font size
move DOM element (animation)
adding or removing stylesheet
calculating offset height or offset width
display: none;
How to avoid: To avoid reflow, try to avoid doing things in the above list and some more in the below

avoid setting multiple inline style
apply animation to the elements that are positioned fixed or absolute
avoid tables for layout
*/

//Question: What is repaint and when does this happen?

//Answer: repaint happens when you change the look of an element without changing the size and shape. This doesn't cause reflow as geometry of the element didn't changed.

