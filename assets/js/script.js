$(document).ready(function() {
// For running timer:
    var currentDayEl = $('#currentDay');
// Use moment to find and format the current time and display it on the page
    var currentTime = moment().format('llll');
    currentDayEl.text(currentTime);
    var currentHour = moment().format('HH');

// For color blocks:
// Compare current hour to the hour on the schedule
$(".time-block").each(function() {
    // This will split the id of each time block and turn that string into a number
    var timeBlock = parseInt($(this).attr("id").split('hour')[1]);
    // Setting colors accordingly
    if (currentHour == timeBlock) {
        $(this).addClass("present");
    } else if (currentHour < timeBlock) {
        $(this).removeClass("present");
        $(this).addClass("future");
    } else if (currentHour > timeBlock) {
        $(this).removeClass("future");
        $(this).addClass("past");
    }
});

// For saving text:
// On button click, saves description text
    $('.saveBtn').click (function(event) {
        event.preventDefault();
        var hour = $(this).parent().attr("id");
        var descriptionText = $(this).siblings(".description").val();
        localStorage.setItem(hour, descriptionText);
    });

// Pulling saved data
    $("#hour09 .description").val(localStorage.getItem("hour09"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
});
