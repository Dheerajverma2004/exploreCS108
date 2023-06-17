const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const today = new Date();

const weekdays= ["Sunday" , "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];

const allMonths= ["January","February","March","April","May","June","July","August","September","October","November"];

console.log(today);

date.innerHTML = (today.getDate()<10?"0":"") + today.getDate();
day.innerHTML = weekdays[today.getDay()];
month.innerHTML = allMonths[today.getMonth()];
year.innerHTML = today.getFullYear();