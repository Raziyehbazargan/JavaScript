//Question: What is createDocumentFragment and why you might use it?


/*
Answer: documentFragment a very lightweight or minimal part of a DOM or a subtree of a DOM tree.
It is very helpful when you are manipulating a part of DOM for multiple times. It becomes expensive to hit a 
certain portion of DOM for hundreds time. You might cause reflow for hundred times. Stay tuned for reflow.
If you are changing dom that cause expensive reflow, you can avoid it by using documentFragment as it is managed in the memory.
*/

//bad practice. you are hitting the DOM every single time
var list = ['foo', 'bar', 'baz'],
el, text;

for (var i = 0; i < list.length; i++) {
    el = document.createElement('li');
    text = document.createTextNode(list[i]);
    el.appendChild(text);
    document.body.appendChild(el);
}

//good practice. you causing reflow one time
var fragment = document.createDocumentFragment(),
    list = ['foo', 'bar', 'baz'],
    el, text;
for (var i = 0; i < list.length; i++) {
    el = document.createElement('li');
    text = document.createTextNode(list[i]);
    el.appendChild(text);
    fragment.appendChild(el);
}
document.body.appendChild(fragment);