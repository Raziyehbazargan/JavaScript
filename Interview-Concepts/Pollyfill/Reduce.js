//reduce() function is used to reduce the array to a single value. We'll again take the example of Logic's best work yet and combine all of them in a single line using .reduce() function.

//.reduce() accepts a callback function (accumulator, currentValue, index and array) and initial value

let logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
  ];

var withReduce = logicAlbums.reduce(function(a, b) {
    return a + ' , ' + b
  }, 'Young Sinatra') // Here we are initialising the array with value as 'Young Sinatra'
  

  Array.prototype._reduce = function(callback, initialValue) {
      var accumulator = initialValue === undefined ? undefined : initialValue

      for (let i = 0; i < this.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, this[i], i, this);
        } else {
            accumulator = this[i];
        }
      }

      return accumulator
  }