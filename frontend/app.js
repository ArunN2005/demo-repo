
$(document).ready(function() {
    // Legacy API Call
    const API_URL = "http://localhost:5000/api";

    // Get Status
    $.get(API_URL + "/status", function(data) {
        $("#status").text(data.system + " [" + data.version + "]");
        if(data.system === "online") {
            $("#status").css("color", "green");
        }
    }).fail(function() {
        $("#status").text("OFFLINE");
        $("#status").css("color", "red");
    });

    // Get Users
    $.get(API_URL + "/users", function(data) {
        data.forEach(function(user) {
            $("#user-list").append("<li>" + user.name + " (" + user.role + ")</li>");
        });
    });
});
