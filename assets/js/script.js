// For running timer:
var currentDayEl = $('#currentDay');

// Use moment to find and format the current time and display it on the page
function displayTime () {
    var currentTime = moment().format('llll');
    currentDayEl.text(currentTime);
};

// Keeps the timer active while the page is loaded
setInterval(displayTime, 1000);


// For saving text:
// On button click, saves description text
$(document).ready(function() {
    $('.btn').on('click', function() {
        var time = $(this).parent().attr('#id');
        var descriptionText = $(this).siblings('.description').val();
        localStorage.setItem(time, descriptionText);
    });
});

