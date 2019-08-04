  $("#loginbutton").on("submit", function(event) {
    event.preventDefault();

    var incomingUser = {
      name: $("#createplan [name=plan]").val().trim(),
      password: $(#passwordinput.val().trim());
    };

    $.ajax("/api/authors", {
      type: "GET",
      data: newPlan
    }).then(
      function() {
        console.log("created new plan");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });