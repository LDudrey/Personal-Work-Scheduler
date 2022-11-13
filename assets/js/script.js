var showDay;
var currentHour = dayjs().get('hour');
var saveBtn = document.getElementById("saveBtn");
var clearBtn = document.getElementById("clear");
var saveMsg = document.querySelector("#msg");
var textInput = document.querySelector("textarea");
var showDay = document.querySelector("#currentDay");
var hourArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// Today's date
// A variable does not have to have a set value when it is declared ~ advice from veteran programmer
showDay = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(showDay);

// Not functioning
function renderSavedSchedule() {
    var textAreas = document.querySelectorAll("#9, #10, #11, #12, #13, #14, #15, #16, #17");
    for (i = 0; i < textAreas.length; i++) {
        localStorage.getItem(textAreas[i].value);
console.log(textAreas[i].value);
    }
    // localStorage.getItem("9am");

    // textInput.textContent = userInput;
};

// https://api.jquery.com/
//variable array for hours?
//for loop to check hour for time of day for color?
// https://api.jquery.com/addclass/
// if else statement to add class for past present or future
//https://day.js.org/docs/en/get-set/get
// dayjs().get('hour')
// console.log(currentHour);
// if (hourArray = hour) {
// addClass("present")
// } else if { (hourArray > hour)
//     addClass("future")
// } else { (hourArray < hour)
//     addClass("past")
// }

// for (i = 0; i < hourArray.length; i++) {
//     // let currentHour = "10"
//     if (hourArray === currentHour[i]) {
//         document.getElementById(textInput).style.backgroundColor = "grey"
//     } else if (hourArray[i] < currentHour) {
//         document.getElementById(textInput).style.backgroundColor = "green"
//     } else {
//         document.getElementById(textInput).style.backgroundColor = "red"
//     }
// };

// timer to clear message after 30 seconds https://getbootstrap.com/docs/4.3/utilities/visibility/
// https://css-plus.com/2011/07/jquery-if-else-statements
// https://api.jquery.com/val/

// Tutor assistance with onclick funtion for buttons
function btnClick(event) {
    event.preventDefault();
    let targetElement = event.target.parentNode.previousElementSibling;
    var key = targetElement.name;
    var value = targetElement.value;
    localStorage.setItem(key, value);
};

function displayMessage() {
    saveMsg.textContent = setAttribute();
};

// Clears Daily Schedule
// https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
$("#clear").click(function () {
    location.reload(true);
    localStorage.clear();
});

function init() {
    renderSavedSchedule();
};
