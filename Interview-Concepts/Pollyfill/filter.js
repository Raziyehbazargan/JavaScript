//.filter() is very much similar to map() function except for the fact, it is used based on the context, where we decide what kind of items do we want in the resulting array

var logicAlbums = [
    {
      name: 'Bobby Tarantino',
      rating: 5,
    },
    { name: 'The Incredible True Story', rating: 4.5 },
    {
      name: 'Supermarket',
      rating: 4.9,
    },
    { name: 'Under Pressure', rating: 5 },
  ]

  logicAlbums.filter(album => {
    return album.rating > 4.9
  })

Array.prototype._filter = function(callback) {
    let arr = [];
    for(let i = 0; i < this.length; i++) {
        if (callback(this[i], i, arr))
        arr.push(this[i]);
    }
    return arr;
}


//using 
logicAlbums._filter(function(album) {
    return album.rating > 4.9 // providing the context here
})