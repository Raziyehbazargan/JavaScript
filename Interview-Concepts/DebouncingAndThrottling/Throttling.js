/*Throttling or sometimes is also called throttle function is a practice used in websites. 
Throttling is used to call a function after every millisecond or a particular interval of time only the first click is executed immediately.*/

const trottle = function(fn, delay) {
    let context = this;
    let flag = true;
    return function() {
        if (flag) {
            fn.apply(context);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, delay);
        }

    }
}