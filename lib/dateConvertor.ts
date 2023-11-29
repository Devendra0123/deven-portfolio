export const convertDate1 = (date: any) => {
  var [datePart, timePart] = date.split(":");

  // Extract year, month, and day from the date part
  var [year, month, day] = datePart.split("-").map(Number);

  // Convert month to month name
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var monthName = months[month - 1]; // Adjusting for 0-based index

  // Create the desired format
  var outputDateString = day + " " + monthName + " " + year;

  return outputDateString;
};
