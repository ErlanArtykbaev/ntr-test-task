
export const getTableHeaderMonths = (): string[] => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const months = [];

  for (let month = 0; month < 12; month++) {
    const date = new Date(currentYear, month, 1);
    const monthName = date.toLocaleString('en-US', { month: 'short' });
    const formattedMonth = `${monthName} ${currentYear}`;
    months.push(formattedMonth);
  }

  return months;
};
