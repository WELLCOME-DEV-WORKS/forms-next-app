const eventDates = [
  '2024-11-07',
  '2024-11-08',
  '2024-11-18',
  '2024-11-22',
  '2024-11-26',
];

const events = () => {
  return eventDates.map((date) => ({
    title: '예약',
    date,
  }));
};

export default events;
