var showDay;
var currentHour;
var savedInput;
var hour09 = document.getElementById("09");
var hour10 = document.getElementById("10");
var hour11 = document.getElementById("11");
var hour12 = document.getElementById("12");
var hour13 = document.getElementById("13");
var hour14 = document.getElementById("14");
var hour15 = document.getElementById("15");
var hour16 = document.getElementById("16");
var hour17 = document.getElementById("17");

// Today's date
// A variable does not have to have a set value when it is declared
showDay = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(showDay);

// // Current hour
// currentHour = dayjs().format('HH').toString();

// Pulls saved schedule into corresponding textareas
function renderSavedSchedule() {
    savedInput = JSON.parse(localStorage.getItem("dayPlannerInput"));
//     var textareas = document.querySelectorAll(".description");
//     console.log(textareas)
//     console.log(savedInput)
//     for (i = 0; i < savedInput.length; i++) {
//         textareas.textContent = savedInput

//     }
// };
    hour09.textContent = savedInput.hour09;
    hour10.textContent = savedInput.hour10;
    hour11.textContent = savedInput.hour11;
    hour12.textContent = savedInput.hour12;
    hour13.textContent = savedInput.hour13;
    hour14.textContent = savedInput.hour14;
    hour15.textContent = savedInput.hour15;
    hour16.textContent = savedInput.hour16;
    hour17.textContent = savedInput.hour17;
};

// Function is called below and will run when page loads
function init() {
    savedInput = JSON.parse(localStorage.getItem("dayPlannerInput"));
    if (savedInput == null) {
        return;
    } else {
        renderSavedSchedule();
    }
    setInterval(checkHour, 100000);
};

// Saves users planner input into local storage
// timer to clear message after 30 seconds? https://getbootstrap.com/docs/4.3/utilities/visibility/
$(".saveBtn").on("click", function (event) {
    event.preventDefault();

    var dayPlannerInput = {
        hour09: hour09.value.trim(),
        hour10: hour10.value.trim(),
        hour11: hour11.value.trim(),
        hour12: hour12.value.trim(),
        hour13: hour13.value.trim(),
        hour14: hour14.value.trim(),
        hour15: hour15.value.trim(),
        hour16: hour16.value.trim(),
        hour17: hour17.value.trim(),
    };

    localStorage.setItem("dayPlannerInput", JSON.stringify(dayPlannerInput));
    $("#msg").html("<p>Success. Hourly input has been saved.</p>");
});


// colors don't update without reloading the page
// https://www.codingem.com/change-html-class-with-javascript/
function checkHour() {
    // Current Hour
    var currentHour = dayjs().format('HH').toString();
    // setInterval(currentHour, 100000);
    console.log(currentHour)
    var hourTextArea = document.querySelectorAll(".description");
    for (i = 0; i < hourTextArea.length; i++) {
        if (hourTextArea[i].id === currentHour) {
            hourTextArea[i].classList.add("present");
            hourTextArea[i].classList.remove("past");
        } else if (hourTextArea[i].id > currentHour) {
            hourTextArea[i].classList.add("future");
            hourTextArea[i].classList.remove("past");
        } else if (hourTextArea[i].id < currentHour) {
            hourTextArea[i].classList.add("past");
            hourTextArea[i].classList.remove("present");
        }
    }
};

// Clears Daily Schedule
// https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
$("#clear").click(function () {
    location.reload(true);
    localStorage.clear();
});

init();
checkHour();
