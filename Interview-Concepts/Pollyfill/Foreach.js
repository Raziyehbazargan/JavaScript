var logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
  ]

  logicAlbums.forEach(album => function() {
    console.log(album);
  })

  Array.prototype._forEach() = function(callback) {
    let arr = this;
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
  }