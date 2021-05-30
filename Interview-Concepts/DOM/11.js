//Question: What is defer and async keyword does in a script tag?

//Answer: HTML parser will ignore defer and async keyword for inline script (script that does not have a src attribute).

/*normal: When you have a plain script tag (no defer or async keyword), parser will pause parsing, script would be downloaded and exectuted. 
After that parsing resume. 

defer: defer keyword in the script tag will defer the execution of the script. Hence script will be executed when DOM is available. 
Important point is, defer is not supported by all major major browsers.

async: If possible, set the execution of the script, asynchronously. async keyword has no effect on inline script.


*/

