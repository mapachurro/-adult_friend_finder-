var path = require("path");
var friends = require("../../../data/friends");
arr1 = friends;


var compare ={

compare: function(input){
    arr2 = input;
console.log(arr2);

arr1.forEach(function(element, i) {
    console.log(arr1[i].scores);
  });

}

}
module.exports = compare;


// So this is where the work has to happen.
// What I would like to do is this: 
//  -Compare each number of each scores array against each number of the user's submission array.
//  -Increment a counter on each object for each number on the 