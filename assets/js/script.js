var showDay;
var currentHour;
var savedInput;
var clearBtn = document.getElementById("clear");
var hour09 = document.getElementById("9");
var hour10 = document.getElementById("10");
var hour11 = document.getElementById("11");
var hour12 = document.getElementById("12");
var hour13 = document.getElementById("13");
var hour14 = document.getElementById("14");
var hour15 = document.getElementById("15");
var hour16 = document.getElementById("16");
var hour17 = document.getElementById("17");


// https://api.jquery.com/
// Today's date
// A variable does not have to have a set value when it is declared
showDay = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(showDay);

// Current hour
currentHour = dayjs().format('HH').toString();

// Pulls saved schedule into corrisponding textareas
function renderSavedSchedule() {
    savedInput = JSON.parse(localStorage.getItem("dayPlannerInput"));
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
    checkHour();
};

// Saves users planner input into local storage
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



// https://api.jquery.com/addclass/
// https://day.js.org/docs/en/get-set/get
// https://www.codingem.com/change-html-class-with-javascript/
function checkHour() {
    var hourTextArea = document.querySelectorAll(".description");
   
    for (i = 0; i < hourTextArea.length; i++) {
        // console.log(hourTextArea[i].id);
        if (hourTextArea[i].id === currentHour) {
            hourTextArea[i].classList.add("present");
            hourTextArea[i].classList.remove("past");
            hourTextArea[i].classList.remove("future");
            // .addClass(".present")
        } else if (hourTextArea[i].id > currentHour) {
            hourTextArea[i].classList.add("future");
            hourTextArea[i].classList.remove("past");
            hourTextArea[i].classList.remove("present");
            // .addClass(".future")
        } else if (hourTextArea[i].id < currentHour) {
            hourTextArea[i].classList.add("past");
            hourTextArea[i].classList.remove("present");
            hourTextArea[i].classList.remove("future");
            // .addClass(".past")
           
        }
    }
};
// console.log(currentHour);

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

// Clears Daily Schedule
// https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
$("#clear").click(function () {
    location.reload(true);
    localStorage.clear();
});

init();
checkHour();
