// same-origin policy 
/*
The same-origin policy prevents JavaScript from making requests across domain boundaries. 
An origin is defined as a combination of URI scheme, hostname, and port number. 
This policy prevents a malicious script on one page from obtaining access to sensitive data
 on another web page through that page's Document Object Model.
*/


/*
Explain Same-Origin Policy
Same-Origin Policy (SOP) is a general web browser security policy for cross-origin requests.
It controls access to data between websites and web applications. 
If there was no SOP, any web page and any JavaScript code would be able to access the DOM of other HTML pages, This would let it access potentially sensitive data from 
another web page as well as perform actions on other web pages without user consent.

It usually includes three elements: the schema (protocol), the hostname (domain/subdomain), and the port. 
All resources identified by the same schema:hostname/anything:port have the same origin. 
SOP is applied by the browser every time that elements from different origins interact, 
for example, a page cannot fetch the content of its iframe unless they are of the same origin.
*/