//Question: How could you make sure to run some javaScript when DOM is ready like $(document).ready?

/*
Answer: There are four different ways-

option-1: Put your script in the last tag of html body element. DOM would be ready by the time browser hits the script tag.
option-2: Place your code inside a DOMContentLoaded handler. This event will be fired when DOM is completely loaded.
*/

document.addEventListener('DOMContentLoaded', function(){   
    //put your script here
 });

 //option-3: Watch changes in the readyState of the document. And the last state is "complete" state, you can put your code there.
 document.onreadystatechange = function () {  
    if (document.readyState == "complete") {
      //put your script here
    }
  }


  //option-4: Search jquery source code and copy dom ready function. In that case you have a ready function that works in the older browsers as well without loading the whole jquery library.

