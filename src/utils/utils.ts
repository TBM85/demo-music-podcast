// get date in MM/DD/YYYY format
export const dateFormat = (date: string) => {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString();
  return formattedDate;
};

// get duration time format
export const timeFormat = (number: number) => {
  const seconds = Math.floor((number % (1000 * 60)) / 1000);
  const minutes = Math.floor((number % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((number % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const durationTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return durationTime;
};
