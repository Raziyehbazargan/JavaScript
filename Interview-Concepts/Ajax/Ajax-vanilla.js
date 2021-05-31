/*
AJAX just uses a combination of:

A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. 
This means that it is possible to update parts of a web page, without reloading the whole page.

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
    // 1. Create a new XMLHttpRequest object
    let xhr = new XMLHttpRequest();

    // 2. Configure it: GET-request for the URL /article/.../load
    xhr.open('GET', '/article/xmlhttprequest/example/load');

    // 3. Send the request over the network
    xhr.send();

    // 4. This will be called after the response is received
    xhr.onload = function() {
        if (xhr.status != 200) { // analyze HTTP status of the response
            alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
        } else { // show the result
            alert(`Done, got ${xhr.response.length} bytes`); // response is the server response
        }
    };

    xhr.onprogress = function(event) {
        if (event.lengthComputable) {
            alert(`Received ${event.loaded} of ${event.total} bytes`);
        } else {
            alert(`Received ${event.loaded} bytes`); // no Content-Length
        }

    };

    xhr.onerror = function() {
    alert("Request failed");
    };
}


//JQuery
$.ajax({

    url : 'http://voicebunny.comeze.com/index.php',
    type : 'GET',
    headers: {
        'Content-Type':'application/json'
    },
    data : {
        'numberOfWords' : 10
    },
    dataType:'json',
    success : function(data) {              
        alert('Data: '+data);
    },
    error : function(request,error)
    {
        alert("Request: "+JSON.stringify(request));
    }
})