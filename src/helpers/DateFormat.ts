export default function formatDate(date: Date | string) {
  const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString('en-US', options);

  // Split the formatted date into day, month, and year parts
  const [month, day, year] = formattedDate.split(' ');

  // Convert the month abbreviation to uppercase
  const capitalizedMonth = month.toUpperCase();

  return `${day} ${capitalizedMonth} ${year}`;
}
