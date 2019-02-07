var path = require("path");
var friends = require("../../../data/friends");
arr1 = friends;


var compare ={

compare: function(input){
    arr2 = input;
console.log (arr1, arr2);

}

}
module.exports = compare;

// Capture the form inputs

    // Form validation
    // function validateForm() {
    //   var isValid = true;
    //   $(".form-control").each(function() {
    //     if ($(this).val() === "") {
    //       isValid = false;
    //     }
    //   });

    //   $(".chosen-select").each(function() {

    //     if ($(this).val() === "") {
    //       isValid = false;
    //     }
    //   });
    //   return isValid;
    // }

    // If all required fields are filled
    // if (validateForm()) {
    //     // Create an object for the user"s data

    //     // AJAX post the data to the friends API.
    //     $.post("/api/friends", userData, function (data) {

    //         // Grab the result from the AJAX post so that the best match's name and photo are displayed.
    //         $("#match-name").text(data.name);
    //         $("#match-img").attr("src", data.photo);

    //         // Show the modal with the best match
    //         $("#results-modal").modal("toggle");

    //     });
    // } else {
    //     alert("Please fill out all fields before submitting!");
    // }
