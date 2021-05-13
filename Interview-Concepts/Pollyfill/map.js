//.map() is used to iterate over the array, and do some manipulation in it with the items and then after doing that so, returns the manipulated array.

var logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
  ];


logicAlbums.map(function(a) {
    return a;
})

Array.prototype._map = function(callback){
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i , this));
    }

    return arr;
}