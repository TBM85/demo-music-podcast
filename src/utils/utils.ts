// get date in MM/DD/YYYY format
export const dateFormat = (date: string) => {
  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString();
  return formattedDate;
}