  $("#loginbutton").on("submit", function(event) {
    event.preventDefault();

    var incomingAuthor = {
      name: $("#nameinput").val().trim(),
      password: $("#passwordinput").val().trim(),
      confirmpassword: $("#confirmpasswordinput").val().trim(),
      city: $("cityinput").val().trim()
    };


      // Send the POST request.so we can push that inputted data to the server and check its credientials
    $.ajax("/api/author", {
      type: "POST",
      data: incomingAuthor
    }).then(
      function() {
        console.log("reciept: author login info has been pushed");
        // // Reload the page to get the updated list
        // location.reload();
      }
    );



  });








  
//     $.ajax("/api/authors", {
//       type: "GET",
//       data: newPlan
//     }).then(
//       function() {
//         console.log("created new plan");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });