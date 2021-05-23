/*
AJAX just uses a combination of:

A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

1. An event occurs in a web page (the page is loaded, a button is clicked)
2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript

Ajax (asynchronous JavaScript and XML) is a set of web development techniques using many web technologies on the client side
to create asynchronous web applications. With Ajax, web applications can send data to and retrieve from a server asynchronously 
(in the background) without interfering with the display and behavior of the existing page. By decoupling the data interchange 
layer from the presentation layer, Ajax allows for web pages, and by extension web applications, to change content dynamically
without the need to reload the entire page. In practice, modern implementations commonly use JSON instead of XML, due to the 
advantages of JSON being native to JavaScript.

The XMLHttpRequest API is frequently used for the asynchronous communication or these days, the fetch API.
*/

function getUsers() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementsByTagName('p').innerHtml = this.responseText;
        }
    };

    request.open('GET', 'ajax_info.txt', true);
    request.send();
}