/*When an event happens on a DOM element, it first runs the handlers on it, then on its parent, 
then all the way up on other ancestors, it’s called Event Bubbling,

In event bubbling the handler first executes on the event attached to the target element, then on all its ancestors, 
it starts from the bottom (deepest layer) and goes on to the top. In order to stop event bubbling we can use 
event.stopPropagation()and event.cancelBubble stops the move upwards, but on the current element all other handlers will run.

To stop the bubbling and prevent handlers on the current element from running, 
there’s a method event.stopImmediatePropagation(). After it no other handlers execute.
*/