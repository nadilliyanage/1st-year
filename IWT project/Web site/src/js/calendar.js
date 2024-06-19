window.addEventListener('DOMContentLoaded', function() {
  // Get the current date
  var currentDate = new Date();
  
  // Get the target calendar element
  var calendarElement = document.querySelector('.calendar');
  
  // Generate the calendar HTML
  var calendarHTML = generateCalendar(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
  
  // Set the calendar HTML to the target element
  calendarElement.innerHTML = calendarHTML;
});

function generateCalendar(year, month, currentDate) {
  var calendarHTML = '';

  // Get the first day of the month
  var firstDay = new Date(year, month, 1);
  
  // Determine the number of days in the month
  var numDays = new Date(year, month + 1, 0).getDate();
  
  // Get the day of the week for the first day
  var firstDayOfWeek = firstDay.getDay();
  
  // Create the table structure for the calendar
  calendarHTML += '<table>';
  calendarHTML += '<tr>';
  calendarHTML += '<th>Sun</th>';
  calendarHTML += '<th>Mon</th>';
  calendarHTML += '<th>Tue</th>';
  calendarHTML += '<th>Wed</th>';
  calendarHTML += '<th>Thu</th>';
  calendarHTML += '<th>Fri</th>';
  calendarHTML += '<th>Sat</th>';
  calendarHTML += '</tr>';

  // Create the calendar rows and cells
  var dayCount = 1;
  var rowCount = Math.ceil((numDays + firstDayOfWeek) / 7);
  
  for (var i = 0; i < rowCount; i++) {
    calendarHTML += '<tr>';
    
    for (var j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfWeek) || dayCount > numDays) {
        calendarHTML += '<td></td>';
      } else {
        if (dayCount === currentDate) {
          calendarHTML += '<td class="current-day">' + dayCount + '</td>';
        } else {
          calendarHTML += '<td>' + dayCount + '</td>';
        }
        dayCount++;
      }
    }
    
    calendarHTML += '</tr>';
  }
  
  calendarHTML += '</table>';

  return calendarHTML;
}

