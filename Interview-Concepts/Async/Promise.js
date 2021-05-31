//A promise is a special JavaScript object, In frontend programming promises are often used for network requests. 

/*
The promise object returned by the new Promise constructor has these internal properties:
state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
*/

/*
o summarize, the executor should perform a job (usually something that takes time) 
and then call resolve or reject to change the state of the corresponding promise object.
*/

let promise = new Promise(function(resolve, reject) {
    // executer
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error('Whoops')), 1000);
})

//Consume a Promise : then, catch , finally
/*
 - The first argument of .then is a function that runs when the promise is resolved, and receives the result.
 - The second argument of .then is a function that runs when the promise is rejected, and receives the error.
 - finally is a good handler for performing cleanup, e.g. stopping our loading indicators, as they are not needed anymore, no matter what the outcome is.


*/
promise
    .then(
        result => alert(result),
        error => alert(error),
    )
    .catch(

    )
    .finally(
        
    )


    //example:
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    delay(3000).then(() => alert('runs after 3 seconds'));

//Example
function showCircle(cx, cy, radius) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    return new Promise(resolve => {
        setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            resolve(div);
        });
        }, 0);
    })
}

function go() {
    showCircle(150, 150, 100).then(div => {
      div.classList.add('message-ball');
      div.append("Hello, world!");
    });
  }


  //Promise API
  /*
  here are 6 static methods in the Promise class. We’ll quickly cover their use cases here.
   - Promise.all : we want many promises to execute in parallel and wait until all of them are ready.
    For instance, download several URLs in parallel and process the content once they are all done.
   - 
  */

   Promise.all([
    new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
    new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
    new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
  ]).then(alert); // 1,2,3 when promises are ready:  each promise contributes an array member
