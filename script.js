// JavaScript for event details toggle
document.addEventListener("DOMContentLoaded", function () {
    const eventDetailsLinks = document.querySelectorAll(".event a");

    eventDetailsLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const event = this.closest(".event");
            const details = event.querySelector(".event-details");

            if (details.style.display === "block") {
                details.style.display = "none";
            } else {
                details.style.display = "block";
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Initialize FullCalendar
    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // You can change the initial view to your preference
        events: [
            // Define your events here
            {
                title: 'Event 1',
                start: '2023-10-25',
                end: '2023-10-26',
            },
            {
                title: 'Event 2',
                start: '2023-11-15',
            },
            // Add more events as needed
        ],
    });

    // Render the calendar
    calendar.render();
});
