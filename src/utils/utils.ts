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

// make a request to localStorage to get the time of the last API update request
export const getLastUpdatedDate = (name: string) => {
  const dataLastUpdatedDate = localStorage.getItem(name);
  if (dataLastUpdatedDate) {
    return Number(JSON.parse(dataLastUpdatedDate));
  }
};

// returns "true" if the difference between the current time and the time of the last API update request
// is greater than 24 hours; otherwise, it returns "false"
export const isDiffMoreThanDay = (getLastUpdatedDate: Function) => {
  const currentTime = new Date().getTime();
  const twentyFourHours = 24 * 60 * 60 * 1000;
  const diffTime = currentTime - (getLastUpdatedDate(getLastUpdatedDate) as number);
  return diffTime >= twentyFourHours;
};
