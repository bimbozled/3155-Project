function generateCalendar() {
    let calendar = document.getElementById("calendar");
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();
    let firstDay = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarHTML = "";
    let dayCounter = 1;

    // Create empty cells for previous days in the week
    for (let i = 0; i < firstDay; i++) {
        calendarHTML += `<div class="calendar-day empty"></div>`;
    }

    // Fill the calendar with actual days
    for (let i = 0; i < daysInMonth; i++) {
        calendarHTML += `<div class="calendar-day" onclick="markStudyDay(this)">${dayCounter}</div>`;
        dayCounter++;
    }

    calendar.innerHTML = calendarHTML;
}

function markStudyDay(day) {
    day.style.backgroundColor = "lightgreen";
}

// Generate the calendar when the page loads
document.addEventListener("DOMContentLoaded", generateCalendar);
