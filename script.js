//your JS code here. If required.
// Define a function daysOfAYear that takes a year as a parameter
function daysOfAYear(year) {
  // Declare a variable to store the number of days, initialized to 365
  let days = 365;

  // Check if the year is divisible by 4
  if (year % 4 === 0) {
    // If the year is divisible by 4, add one day to the number of days
    days++;

    // Check if the year is divisible by 100
    if (year % 100 === 0) {
      // If the year is divisible by 100, subtract one day from the number of days
      days--;

      // Check if the year is divisible by 400
      if (year % 400 === 0) {
        // If the year is divisible by 400, add one day to the number of days
        days++;
      }
    }
  }

  // Return the number of days as a number
  return days;
}

