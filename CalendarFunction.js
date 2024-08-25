"use strict";
//This part is the calendar
let thisday = new Date();
let presentMonth = thisday.getMonth()+1;
let presentYear = thisday.getFullYear();

let calmonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let CalendarMonths = document.getElementsByClassName('month')[0];
let CalendarYears = document.getElementsByClassName('year')[0];
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let chooseMonth = document.getElementById('month');
let chooseYear = document.getElementById('year');

chooseMonth.value=presentMonth;
chooseYear.value=presentYear;

next.addEventListener('click', monthAhead);
prev.addEventListener('click', monthBehind);
selectYear.addEventListener('input', (event)=> {
    if(event.keyCode == 13) {
        event.preventDefault();
        return false;
    } else {
        transition();
    }
})
selectMonth.addEventListener('change', jump);

showCalendar(currentMonth,currentYear);

function showCalendar(month, year) { 

    let firstDay = (new Date(year, month)).getDay();

    let tbl = document.getElementsByClassName("calendar-days")[0]; // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // creating all cells
    let d = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");

        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (d > daysInMonth(month, year)) {
                break;
            }
            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("active"); //this shows that today's day is "active"
                } 
                cell.classList.add('day');
                cell.appendChild(cellText);
                row.appendChild(cell);
                d++;
            }
        }
        tbl.appendChild(row); // appending each row into calendar body.
    }
}
function monthAhead() {
    presentYear = (presentMonth === 11) ? presentYear + 1 : presentYear;
    presentMonth = (presentMonth + 1) % 12;
    showCalendar(presentMonth, presentYear);
}
function monthBehind() {
    presentYear = (presentMonth === 0) ? presentYear - 1 : presentYear;
    presentMonth = (presentMonth === 0) ? 11 : presentMonth - 1;
    showCalendar(presentMonth, presentYear);
}
function transition() {
    presentYear = parseInt(chooseYear.value);
    presentMonth = parseInt(chooseMonth.value);
    showCalendar(currentMonth, currentYear);
}
function daysWithinMonth (month, year) {
    return new Date(year, month+1, 0).getDate();
}
