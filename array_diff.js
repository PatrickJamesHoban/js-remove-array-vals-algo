// PSEUDOCODE
// iterate through array b.
// check to see if the values are present in array a.
// if present remove values from array a.
// return array.


// CODE
function array_diff(a, b) {
  var ret_arr = a.slice();
  b.forEach(function(num){
    ret_arr = ret_arr.filter(item => item != num);
  });
  return ret_arr;
}

// OTHER ANSWERS
// function array_diff(a, b) {
//   return a.filter(function(x) { return b.indexOf(x) == -1; });
// }

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }



// DRIVER CODE

array_diff([], [4,5]);      // []
array_diff([3,4], [3]);     // [4]
array_diff([1,8,2], []);    // [1,8,2]
array_diff([1,2,2,2,3],[2]) // [1,3]