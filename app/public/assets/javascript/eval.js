var path = require("path");
var friends = require("../../../data/friends");
arr1 = friends;


var compare ={

compare: function(input){
    arr2 = input;
console.log(arr2);

arr1.forEach(function(element, i) {
    friendscores = arr1[i].scores;
    points = arr1[i].points;
    name = arr1[i].name;
        friendscores.forEach(function(element, j){
            // console.log(arr1[j], arr2[j])
            if (friendscores[j] == arr2[j]){
                points++;
                
            } 
        })
        console.log(name, points);
  });

}

}
module.exports = compare;


// So this is where the work has to happen.
// What I would like to do is this: 
//  DONE -Compare each number of each scores array against each number of the user's submission array.
//  DONE -Increment a counter on each object for each number on the user's array that matches a number on that object's score array.
//  -At the end, find which friend object has the highest number
//  -post that friend's info back to the page, and allow it to be loaded into a modal