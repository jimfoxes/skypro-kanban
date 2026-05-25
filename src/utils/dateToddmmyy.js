export function formatDateToDDMMYY(dateString) {
  const date = new Date(dateString);
  
  // Проверка на валидность даты
  if (isNaN(date.getTime())) {
    return "Некорректная дата";
  }
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(-2);
  
  return `${day}.${month}.${year}`;
}