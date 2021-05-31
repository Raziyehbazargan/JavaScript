/*
Explain XSS (Cross-site scripting)
Cross-site Scripting (XSS) is a client-side code injection attack. 
The attacker aims to execute malicious scripts in a web browser of the victim by including malicious code in a legitimate web page or web application. 
The actual attack occurs when the victim visits the web page or web application that executes the malicious code. 
The web page or web application becomes a vehicle to deliver the malicious script to the user’s browser. 
Vulnerable vehicles that are commonly used for Cross-site Scripting attacks are forums, message boards, and web pages that allow comments



NOTE: Same-Origin Policy on its own increases security but is not enough to prevent all Cross-Site Request Forgery (CSRF) attacks, 
which basically are an attempt to take advantage of different origins. That is why anti-CSRF tokens should still be used as an additional form of protection. 

SOP is also completely useless as a method of protection against Cross-site Scripting (XSS) because it would have to limit loading of scripts from different sites
and that would completely hinder the functionality of web applications.
Therefore, while SOP is an effective means of protection against the obvious, it cannot be considered a foolproof protection 
mechanism. However, it is a mechanism that web developers must understand and use.

*/