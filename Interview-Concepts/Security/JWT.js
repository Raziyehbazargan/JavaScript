/*
Json Web Token is only used for authorization not authentication.  it actually  making sure that the user that sends request to the web server
is the same user that logged in during the authentication process.

The  traditional way it's normally done, is by using session for example you have a session id that you send down to the cookies of the browser and then evertime that clinet  send a request it sends that session
id up  to the server and server checks it's memory if it has the session id, it authorize the user and then does the operation.

but JWT instead of cookies uses a JSON Web Token which what JWT is stands for to do the authorization.

- Clinet send a request to the server with user/pass
- server create JWT for user with secret key (singed it with a secret key)
- server sends back the JWT to the browser (JWT has all the user data), browser can store this JWT whatever it wanrs
- Client send request to the server with JWT
- server vlidiate the JWT and authorize the user
- send response back to the clinet

In the session version, the information about the user is stored on the server. so server has to lookup to find the user base on session  id.
with JWT, user information is stores in the token. it stores on the clinet, so we can use the same JWT accross multiple servers.
*/