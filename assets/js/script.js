var showDay;
var currentHour = dayjs().get('hour');
var saveBtn = document.getElementById("saveBtn");
var clearBtn = document.getElementById("clear");
var saveMsg = document.querySelector("#msg");
var hourInput = document.getElementById("#plannerInput");
var showDay = document.querySelector("#currentDay");
var hourArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];


// Today's date
// function todayDate() {
// dayjs().format('dddd, MMMM D YYYY');
// $('#currentDay').text(showDay);
// }
// Today's date
// A variable does not have to have a set value when it is declared ~ advice from veteran programmer
showDay = dayjs().format('dddd, MMMM D, YYYY');
$('#currentDay').text(showDay);

// Not functioning
function renderSavedSchedule() {
    var userInput = localStorage.getItem("9am");

    hourInput.textContent = userInput;
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

for (i= 0; i < hourArray.length; i++) {
    let currentHour = "10"
    if(hourArray === currentHour[i]) {
document.getElementById(currentHour).style.backgroundColor="grey"
    } else if (hourArray[i] < currentHour) {
        document.getElementById(currentHour).style.backgroundColor="green"
    } else {
        document.getElementById(currentHour).style.backgroundColor="red"
    }
};



// local.storage set up to store user input
// reference week 4 act 21-24
// event.listener to trigger saving user input?
// how to save for each hour?
// timer to clear message after 30 seconds https://getbootstrap.com/docs/4.3/utilities/visibility/
// https://css-plus.com/2011/07/jquery-if-else-statements
// https://api.jquery.com/val/

// console.log(document.getElementById("saveBtn"));
// $("#saveBtn").on("click", function () {
//     $("textarea").each(function (index) {
//     var userInput = $("textarea").val();
//     if (this === "") {
//         $("#msg").html("<p>Error. Hourly input cannot be blank</p>");
//     } else {
//         $("#msg").html("<p>Success. Hourly input has been saved</p>");
//     }
//     localStorage.setItem("9am", userInput)
//     localStorage.setItem("10am", userInput)
//     })
// });

function btnClick (event) {
event.preventDefault();
// console.log(event.target.type);
// console.log(event.target.parentNode.previousElementSibling.value);
let targetElement = null;
if (event.target.type === "submit") {
    targetElement = event.target.parentNode.previousElementSibling
} else {
    targetElement = event.target.parentNode.parentNode.previousElementSibling
}
console.log(targetElement);
//let targetElement = event.target.parentNode.previousElementSibling
let key = targetElement.name
let value = targetElement.value
localStorage.setItem(key, value);
};


// $("#saveBtn").click(function () {
//     var userInput = $("#plannerInput").val() || [];
//     if (userInput === "") {
//         $("#msg").html("<p>Error. Hourly input cannot be blank</p>");
//     } else {
//         $("#msg").html("<p>Success. Hourly input has been saved</p>");
//     }
//     localStorage.setItem("Day", userInput)
    // localStorage.setItem("10am", userInput)
// });

// saveBtn.addEventListener("click", function (event) {
//    event.preventDefault();
//     var userInput = document.querySelector("#plannerInput").value;
//     if (userInput === "") {
//         displayMessage("Error", "Hourly input cannot be blank.");
//     } else {
//         displayMessage("Success", "Hourly input has been saved!");

//         localStorage.setItem("9am", userInput)
//         //localStorage.setItem("10am", userInput)
//     }
// });

function displayMessage() {
    saveMsg.textContent = setAttribute();
};

//Clears Daily Schedule
//Doesn't clear input at the moment
// https://developer.mozilla.org/en-US/docs/Web/API/Location/reload
$("#clear").click(function () {
    alert
    location.reload(true);
    localStorage.clear();
});

// Extra functionality
// Clear Daily Schedule
// clearBtn.addEventListener("click", () => {
//     hourInput.clear();
//     localStorage.clear();

// });

function init() {
    renderSavedSchedule();
};
