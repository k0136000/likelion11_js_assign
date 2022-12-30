const nowDate = document.getElementById("date");
const nowDayOfWeek = document.getElementById("dayOfWeek");
const WEEKDAY = ['일','월','화','수','목','금','토'];

function setDate(pageDate) {
  const date = new Date();
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  const dayOfWeek = WEEKDAY[date.getDay()];
  nowDate.innerText = `${year}년 ${month}월 ${day}일`;
  nowDayOfWeek.innerText = `${dayOfWeek}요일`;
}

setDate();
setInterval(setDate, 1000);