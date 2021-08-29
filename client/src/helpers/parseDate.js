export const parseDate = (date) => {
  const dt = new Date(date);
  const d = dt.getDate();
  const m = dt.getMonth() + 1;
  const y = dt.getFullYear();

  return `${d < 10 ? `0${d}` : d}/${m < 10 ? `0${m}` : m}/${y}`;
};

export const parseDateWithMinutes = (date) => {
  const dt = new Date(date);
  const d = dt.getDate();
  const m = dt.getMonth() + 1;
  const y = dt.getFullYear();
  const h = dt.getHours();
  const minutes = dt.getMinutes();

  return `${d < 10 ? `0${d}` : d}/${m < 10 ? `0${m}` : m}/${y} ${h < 10 ? `0${h}` : h}:${minutes < 10 ? `0${minutes}` : minutes}`;
};
