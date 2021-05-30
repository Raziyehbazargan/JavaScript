//Question: How would you destroy multiple list items with one click handler?

/*
Easy Solution: If you have one hundred list items that have similar event to handle. 
You can write one hundred event handler (actually copy paste) same code in 99 places. 
This works but if something changes in the event handler, you have to change in one hundred places. 
This doesn't call job security. This is called screwed up.

Second problem is if you want to dynamically add a new element, you have to make sure event handler
is attached with the new element. More JavaScript code!

Answer: We can actually leverage event bubbling. You can have only one event handler attached to the parent element of one
hundred list items. In this case, you can attach the event handler to the "ul" tag. After you click on a list item 
(list item does not have an event), event will bubble and "ul" has a handler. That handler will be fired.
*/

<ul id="listToDestroy">
    <li><a href="#">first item</a></li>
    <li><a href="#">second item</a></li>
    <li><a href="#">third item</a></li>
    <li><a href="#">forth item</a></li>
    <li><a href="#">Fifth item</a></li>
</ul>
        
document.getElementById('listToDestroy').addEventListener('click', function (e) { 
    var elm = e.target.parentNode; 
        elm.parentNode.removeChild(elm);
        e.preventDefault();
});