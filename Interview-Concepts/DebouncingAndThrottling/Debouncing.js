/*Debouncing in JavaScript is a practice used to improve browser performance. 
It’s very useful to improve the performance of large scale web applications. 
There might be some functionality in a web page which requires time-consuming computations. 
If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. 
Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. 
In other words, it limits the rate at which a function gets invoked.
*/

let counter = 0;
const getData = () => {
    //calls an API and gets data
    console.log("Fetching data...", counter++);
}

const debounce = function(fn, delay) {
    let timer;

    return function() {
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, arguments);
        }, delay);
    }
}
const search = debounce(getData, 500);