function move() {

  function compareRandom(a, b) {
    return Math.random() - 0.5;
  }

  var blue = document.getElementById('square-blue');
  var red = document.getElementById('square-red');
  var green = document.getElementById('square-green');

  var arr = [blue, green, red];
  var sort_arr =  arr.sort(compareRandom);

  for (var i = 0; i < sort_arr.length; i++){
    console.log(sort_arr[i]);
    document.getElementById('row').appendChild(sort_arr[i]);
  }
}
