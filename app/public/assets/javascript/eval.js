var path = require("path");
var friends = require("../../../data/friends");
var userName = $("#name").val();
var userPhoto = $("#photo").val();
var scores = [
    $("#q1").val(),
    $("#q2").val(),
    $("#q3").val(),
    $("#q4").val(),
    $("#q5").val(),
    $("#q6").val(),
    $("#q7").val(),
    $("#q8").val(),
    $("#q9").val(),
    $("#q10").val()
];

$("#submit").on("click", function (event) {
    event.preventDefault();
    console.log(friends);
})


// function compare(arr1, arr2){

//     friends.forEach((friends[e1].scores)=>arr2.forEach((e2)=>
//     if (e1 === e2){
        
//     }))
// }

// Chosen CSS
// var config = {
//     ".chosen-select": {},
//     ".chosen-select-deselect": {
//         allow_single_deselect: true
//     },
//     ".chosen-select-no-single": {
//         disable_search_threshold: 10
//     },
//     ".chosen-select-no-results": {
//         no_results_text: "Oops, nothing found!"
//     },
//     ".chosen-select-width": {
//         width: "95%"
//     }
// };

// for (var selector in config) {
//     $(selector).chosen(config[selector]);
// }

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
