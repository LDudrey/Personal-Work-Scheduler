// Today's date
// function todayDate() {
// dayjs().format('dddd, MMMM D YYYY');
// $('#currentDay').text(showDay);
// }

// Tutor assistance with onclick funtion for buttons
// function btnClick(event) {
//     event.preventDefault();
//     let targetElement = event.target.parentNode.previousElementSibling;
//     var key = targetElement.name;
//     var value = targetElement.value;
//     localStorage.setItem(key, value);
// };


// Tutor assistance with onclick funtion for buttons
// function btnClick(event) {
//     event.preventDefault();
//     // console.log(event.target.type);
//     // console.log(event.target.parentNode.previousElementSibling.value);
//     let targetElement = event.target.parentNode.previousElementSibling;
//     // if (event.target.type === "submit") {
//     //     targetElement = event.target.parentNode.previousElementSibling;
//     // } else {
//     //     targetElement = event.target.parentNode.parentNode.previousElementSibling;
//     // }
//          console.log(targetElement);
//     var key = targetElement.name;
//     var value = targetElement.value;
//     localStorage.setItem(key, value);
// };

// $("#saveBtn").on("click", function () {
//     $("textarea").each(function (index) {
//     var userInput = $("textarea").val();
//     localStorage.setItem("9am", userInput)
//     localStorage.setItem("10am", userInput)
//     })
// });

// $("#saveBtn").click(function () {
//     var userInput = $("#plannerInput").val() || [];
//     localStorage.setItem("Day", userInput)
//     localStorage.setItem("10am", userInput)
// });

// saveBtn.addEventListener("click", function (event) {
//    event.preventDefault();
//     var userInput = document.querySelector("#plannerInput").value;
//     localStorage.setItem("9am", userInput)
//    //localStorage.setItem("10am", userInput)
//     }
// });

// Extra functionality
// Clear Daily Schedule
// clearBtn.addEventListener("click", () => {
//     hourInput.clear();
//     localStorage.clear();

// });

// Not functioning
// function renderSavedSchedule() {
//     var textAreas = document.querySelectorAll("#9, #10, #11, #12, #13, #14, #15, #16, #17");
//     for (i = 0; i < textAreas.length; i++) {
//         localStorage.getItem(textAreas[i].value);
// console.log(textAreas[i].value);
//     }
// localStorage.getItem("9am");

// textInput.textContent = userInput;
// };
