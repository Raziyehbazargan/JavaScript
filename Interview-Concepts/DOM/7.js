//Question: What is event bubble? How does event flows?

/*
Answer: To understand event bubble, you have to understand what happen when you click on anything on a page.

Where you clicked: If you have a table with multiple rows and multiple columns and you click in one of the cell

You will think that you have clicked on the cell and browser will know that you have a click handler with the cell that 
will be fired immediately.
You are completely wrong. Right away, browser doesn't know where you have clicked.
The way browser find out where you have clicked are as follows-

Capture: When you clicked, browser knows a click event occurred. It starts from the window (lowest level/root of your website), 
then goes to document, then html root tag, then body, then table... its trying to reach the the as lowest level of element as possible. 
This is called capture phase (phase -1).

Target: When browser reach the lowest level of element. In this case, you have clicked on a table cell (table data) hence target 
would be "td" tag. Then browser checks whether you have any click handler attached to this element. 
If there is any, browser executes that click hander. This is called target phase (phase -2).

Bubbling: After firing click hander attached to "td", browser walks toward root. 
One level upward and check whether there is any click handler attached with table row 
("tr" element). If there is any it will execute that. Then it goes to tbody, table, body, html, document, window. 
In this stage its moving upward and this is called event bubbling or bubbling phase (phase-3). Please note that,
 you clicked on cell but all the event handler with parent elements will be fired. This is actually very powerful 
 (check event delegation)*/

 //If you want to stop the bubbling you have to explicitly call stopPropagation or stopImmediatePropagation

