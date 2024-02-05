/*!
* Start Bootstrap - Simple Sidebar v6.0.6 (https://startbootstrap.com/template/simple-sidebar)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-simple-sidebar/blob/master/LICENSE)
*/
// 
// Scripts
// 

$(document).ready(function () {
    generateCalendar();
});

function generateCalendar() {
    var today = new Date();
    var currentMonth = today.getMonth();
    var currentYear = today.getFullYear();
 
    var firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    var lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    var startingDay = firstDayOfMonth.getDay();

    var calendarBody = $('#calendar-body');
    calendarBody.empty();

    var dayCounter = 1;

    for (var i = 0; i < 6; i++) {
        var row = $('<div class="row"></div>');

        for (var j = 0; j < 7; j++) {
            var day = $('<div class="col-sm-1 day"></div>');

            if ((i === 0 && j < startingDay) || dayCounter > lastDayOfMonth.getDate()) {
                // Empty cells before the start of the month and after the end of the month
                day.text('');
            } else {
                day.text(dayCounter);

                if (dayCounter === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()) {
                    // Highlight today's date
                    day.addClass('today');
                }

                dayCounter++;
            }

            row.append(day);
        }

        calendarBody.append(row);
    }
}
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});
