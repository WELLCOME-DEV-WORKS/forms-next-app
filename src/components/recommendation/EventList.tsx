const eventDates = [
  '2024-10-07',
  '2024-10-08',
  '2024-10-18',
  '2024-10-22',
  '2024-10-26',
];

const events = () => {
  return eventDates.map((date) => ({
    title: '예약',
    date,
  }));
};

export default events;
